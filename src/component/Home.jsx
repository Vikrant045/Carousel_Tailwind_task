import React from 'react'
import { FiHome } from 'react-icons/fi';
import Card from '../component/card/Card'
import FAQ from './F&Q/FAQ';
import Footer from './footer/Footer';
import Carousel from './carousel/Carousel';
import Container from './containner/Container'

function Home() {
  const slides = [
      
    "https://plus.unsplash.com/premium_photo-1706625695400-75c979c48c5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
     "https://images.unsplash.com/photo-1711834232122-d33111024a7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",       
   "https://images.unsplash.com/photo-1711639140843-3b9acf88a6a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
   "https://images.unsplash.com/photo-1712100596750-f5a184222206?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
];
console.log(slides)
 
  return (
    <>
       <Container>
          <Carousel slides={slides}/>
      
        
      

      <div className='px-15'>
            
      <div className='flex flex-col md:flex-row items-center mt-10 ' >
        <div className=' sm:flex sm:flex-col w-1/2 px-0 ml-0 bg-white h-96 sm:h-full sm:w-full sm:ml-10'>

          <div className=' h-full sm:mx-1 bg-white sm:w-full lg:mx-24'>
            <p className='font-bold text-violet-600 text-4xl mt-8  sm:ml-0'>
              Lorem ipsum dolor sit, voluptatum Praesentium nisi cum unde labore id?
            </p>
            <p className=' mt-3 font-semibold text-grey text-xl text-neutral-400'>
              Lorem ipsum dolor sit, voluptatum Praesentium nisi cum unde labore id?Lorem ipsum dolor sit
            </p>
            <div className='flex flex-col md:flex-row justify-around'>
              <div className='w-1/2 sm:w-full sm:mt-4'>
                <div className=' flex h-10 bg-white mt-3 '>
                  <div className=' flex items-center w-1/6 ml-0 '>
                    <FiHome size={32} />
                  </div>
                  <div className='w-3/4'>
                    <p><b>Weight loss plans</b> and weight gain plans  </p>
                  </div>
                </div>
                <div className=' flex h-10 bg-white mt-3 sm:mt-3'>
                  <div className=' flex items-center w-1/6 '>
                    <FiHome size={32} />
                  </div>
                  <div className='w-3/4'>
                    <p><b>Weight loss plans</b> and weight gain plans  </p>
                  </div>
                </div>
              </div>
              <div className='w-1/2 sm:w-full sm:mt-3'>
                <div className=' flex h-10 bg-white mt-3 sm:mt-3  sm:w-full'>
                  <div className=' flex items-center w-1/6 '>
                    <FiHome size={32} />
                  </div>
                  <div className='w-3/4'>
                    <p><b>Weight loss plans</b> and weight gain plans  </p>
                  </div>
                </div>
                <div className=' flex h-10 bg-white mt-3 sm:mt-3'>
                  <div className=' flex items-center w-1/6 '>
                    <FiHome size={32} />
                  </div>
                  <div className='w-3/4'>
                    <p><b>Weight loss plans</b> and weight gain plans  </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-5 bg-violet-600 h-10  flex justify-center ml-24 mr-32 border rounded-md'>
              <span className=' font-semibold text-white mt-2 '>View Programs</span>
            </div>
          </div>
        </div>
        <div className='w-1/2 bg-white h-96 sm:w-full'>
          <div className=' h-full sm:w-full sm:mt-8 mx-28 bg-white'>
            <img src="https://images.unsplash.com/photo-1509255929945-586a420363cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJveGluZyUyMHB1bmNofGVufDB8fDB8fHww" alt="img" />
          </div>
        </div>

      </div>

      <div className='flex justify-center mt-16 sm:mx-16 sm:mt-28'>
        <span className='text-4xl font-semibold'>Weight Loss Programs Built For ! <span className='text-violet-600'>People Like You</span></span>
      </div>
      </div>
      
     
      <div className='flex  flex-col md:flex-row mt-10 mx-4 md:mx-56'>
        <div className='w-full sm:mt-6'>
          <Card />
        </div>
        <div className='w-full sm:mt-6'>
          <Card />
        </div>
      </div>
      </Container>
      <div>
        <FAQ />
      </div>

      <div className='bg-violet-600 bottom-0'>
        <Footer />
      </div>

    </>
  )
}

export default Home
