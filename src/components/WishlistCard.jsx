import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWishlist } from '../lib/slices/productsSlice';

const WishlistCard = ({ product }) => {
	const dispatch = useDispatch();

	const removeWishlistHandler = id => {
		dispatch(removeWishlist(id));
	};
	return (
		<div className='rounded-xl flex gap-5 shadow border-2 p-3 border-primary mb-5'>
			<div className='w-[150px] flex-shrink-0 aspect-square'>
				<img
					src={product.image}
					className='w-full h-full object-contain'
					alt={product.title}
				/>
			</div>
			<div>
				<h2 className='text-xl font-semibold'>{product.title}</h2>
				<p className='mt-2'>{product.description}</p>
				<button
					onClick={() => removeWishlistHandler(product.id)}
					className='border-primary cursor-pointer rounded-lg border-2 text-primary text-sm mt-3 font-semibold px-5 py-1.5'
				>
					Remove from wishlist
				</button>
			</div>
		</div>
	);
};

export default WishlistCard;