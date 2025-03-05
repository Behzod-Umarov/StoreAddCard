import React, { useEffect } from 'react';
import { Cart, Filter, Home, Navbar, Wishlist } from './components';
import { Route, Routes } from 'react-router-dom';
import { setError, setIsLoading, setWishlist, setProducts, setCart } from './lib/slices/productsSlice';
import productsService from './service/products';
import { useDispatch, useSelector } from 'react-redux';
import { getFromLocal, setToLocal } from './lib/ls';

const App = () => {
  const { wishlist, cart } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      dispatch(setIsLoading(true)); 
      try {
        const { data } = await productsService.getAll();
        dispatch(setProducts(data));
        dispatch(setError(null));
      } catch (error) {
        dispatch(setError(error.message)); 
      } finally {
        dispatch(setIsLoading(false));
      }
    };

    getProducts();

    const cartData = getFromLocal('cart');
    if (cartData) {
      dispatch(setCart(cartData));
    }

    const wishlists = getFromLocal('wishlist');
    if (wishlists) {
      dispatch(setWishlist(wishlists));
    }
  }, [dispatch]); 

  useEffect(() => {
    setToLocal('cart', cart);
    setToLocal('wishlist', wishlist);
  }, [wishlist, cart]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/filter/:q' element={<Filter />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;