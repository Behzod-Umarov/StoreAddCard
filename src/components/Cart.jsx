import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../lib/slices/productsSlice';
import CartCard from './CartCard';

const Cart = () => {
	const dispatch = useDispatch();
	const { cart } = useSelector(state => state.products);

	const removeAllHandler = () => {
		dispatch(setCart([]));
	};

	return (
		<div className='container mt-10'>
			<div className='flex justify-between pb-3 mb-5 items-center text-primary border-b-2 border-primary'>
				<h2 className='text-4xl font-semibold'>Cart Page</h2>
				<button
					onClick={removeAllHandler}
					className='border-2 border-primary cursor-pointer px-5 py-1.5 rounded-xl'
				>
					Remove All <i className='fa fa-trash-alt'></i>
				</button>
			</div>
			<div className='flex flex-col gap-5'>
				{cart && cart.length > 0 ? (
					cart.map(p => <CartCard key={p.id} product={p} />)
				) : (
					<div className='text-center py-5'>
						<h3 className='text-2xl text-primary opacity-50 font-semibold'>
							Your cart is empty
						</h3>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
