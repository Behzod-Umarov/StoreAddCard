import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WishlistCard from './WishlistCard';
import { setWishlist } from '../lib/slices/productsSlice';

const Wishlist = () => {
	const dispatch = useDispatch();
	const { wishlist } = useSelector(state => state.products);
	const removeAllHandler = () => {
		dispatch(setWishlist([]));
	};
	return (
		<div className='container mt-10'>
			<div className='flex justify-between pb-3 mb-5 items-center text-primary  border-b-2 border-primary'>
				<h2 className='text-4xl font-semibold'>Wishlist Page</h2>
				<button
					onClick={removeAllHandler}
					className='border-2 border-primary cursor-pointer px-5 py-1.5 rounded-xl'
				>
					Remove All <i className='fa fa-trash-alt'></i>
				</button>
			</div>
			<div className='flex flex-col gap-5'>
				{wishlist && wishlist.length > 0 ? (
					wishlist.map(p => <WishlistCard key={p.id} product={p} />)
				) : (
					<div className='text-center py-5'>
						<h3 className='text-2xl text-primary opacity-50 font-semibold'>
							Your wishlist is empty
						</h3>
					</div>
				)}
			</div>
		</div>
	);
};

export default Wishlist;