import React from 'react';

const benefit = 'flex flex-nowrap justify-center text-sm text-[#868892] font-medium items-center px-4 py-[0.4rem] gap-[10px] bg-white border border-[#D7D7DB] rounded-lg';

export default function Hero() {
    return (
        <div className='flex flex-col items-center mt-[6.25rem] mb-[3rem] mx-auto px-6'>
    

            <div className='flex flex-col font-manrope mb-[2rem] gap-2'>
               <h1 className='text-[2.75rem] sm:text-[4.50rem] tracking-[-0.20rem] flex flex-col text-center  leading-[1.1] font-bold'>
              NHI but you can actually <br/> register online.
             </h1>
        
             <p className=' flex flex-col text-center text-[1rem] sm:text-[1.125rem] text-[#000000]'>
              Get started to recieve the healthcare you deserve
             </p>
            </div>
            
            <div className='flex gap-[1rem] mb-[4.75rem] sm:mb-[6.5rem] font-manrope'>
              <div className='px-5 py-2 bg-[#1fcd39] text-white font-semibold rounded-xl text-[1.125rem] cursor-pointer'><a href="./form.html" target='_blank'>Register now</a></div>
              <div className='px-5 py-2 border-1 text-black rounded-xl text-[1.125rem] cursor-pointer"'>Learn More</div>
            </div>

            <div className='font-manrope flex flex-wrap justify-center gap-[0.5rem] sm:gap-6'>
              <div className={benefit}>Screen services</div>
              <div className={benefit}>Pharmaceuticals delivery</div>
              <div className={benefit}>NCD Services</div>
              <div className={benefit}>+ much more</div>
            </div>
        
        </div>
       
    );  
};