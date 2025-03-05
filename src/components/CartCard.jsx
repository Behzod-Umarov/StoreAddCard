import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCart } from '../lib/slices/productsSlice';

const CartCard = ({ product }) => {
	const dispatch = useDispatch();

	const removeCartHandler = () => {
		dispatch(removeCart(product.id)); 
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
					onClick={removeCartHandler}
					className='border-primary cursor-pointer rounded-lg border-2 text-primary text-sm mt-8 font-semibold px-5 py-1.5'
				>
					Remove from Cart
				</button>
			</div>
		</div>
	);
};

export default CartCard;
