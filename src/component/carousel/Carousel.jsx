import React, { useEffect, useState } from 'react';
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

function Carousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(()=>{
    const internal = setTimeout(()=>{
      nextSlide();
    },3000)
    return ()=>clearInterval(internal);

  },[currentSlide])

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const previousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div className='relative overflow-hidden my-5 w-full mt-38 h-[38rem]'>
      <div className='flex w-full h-[38frem] transition-transform ease-out duration-500' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((s, index) => (
          <img key={index} src={s} alt='img' style={{ minWidth: '100%', }} />
        ))}
      </div>

      <div className='absolute top-0 h-full w-full flex justify-between items-center text-white px-10'>
        <button onClick={previousSlide}>
          <SlArrowLeft size={40} />
        </button>
        <button onClick={nextSlide}>
          <SlArrowRight size={40} />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
