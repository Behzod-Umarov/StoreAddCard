import React from "react";
import { HeroImage } from "../assets";

const Hero = () => {
  return (
	<div className='container'>
	<div className='overflow-hidden px-0 grid grid-cols-3 border-4 border-primary h-[500px] rounded-[3rem] mt-5'>
		<div className='bg-[#F7F7F7] pe-1 h-full flex items-center justify-end text-primary text-5xl'>
			<span>Новая</span>
		</div>
		<div className='bg-primary ps-1 text-[#F7F7F7] flex items-center text-5xl'>
			<div className='relative'>
				<p>колекция</p>
				<a
					className='border-b absolute text-[#E0BEA2] top-[120%] right-0 pb-3  text-sm'
					href='/'
				>
					Смотреть Новинки
					<i className='fa fa-chevron-right ms-2 text-[10px]'></i>
				</a>
			</div>
		</div>
		<div>
			<img
				className='w-full h-full object-cover'
				src={HeroImage}
				alt='hero image'
			/>
		</div>
      </div>
    </div>
  );
};

export default Hero;
