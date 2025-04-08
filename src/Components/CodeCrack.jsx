import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

const CodeCrack = () => {
  return (
    <div className='bg-black px-5 py-7 pb-10'>
      <div className='text-center mb-14'>
      <span className="text-white inline-flex border-red-500 border bg-blue-900/20 px-4 py-1 rounded-full text-sm font-semibold tracking-wider">
          Our Features & Services
        </span>
      </div>
      <div className='flex flex-col lg:flex-row justify-center gap-10 max-w-6xl mx-auto'>
        {/* Left Section */}
        
        <div className='left flex-1 flex flex-col gap-2'>
        
          <h2 className='text-3xl md:text-4xl text-white font-bold'>
            Grow Your Business with Problem Solving Solutions
          </h2>
          <p className='text-gray-300 my-3'>
            I help businesses across the USA grow with custom websites, modern
            design, and fast digital solutions. Let’s build something powerful,
            together.
          </p>
          <div className='btn-container flex flex-col sm:flex-row gap-5 mt-4'>
            <button className='bg-indigo-500 hover:bg-indigo-600 rounded-full px-5 py-3 font-bold text-white'>
              View My Services
            </button>
            <button className='group bg-gray-700/50 hover:bg-white border-red-500 border rounded-full px-5 py-3 text-white flex gap-3 justify-center items-center transition-all duration-300'>
              <span className='font-bold group-hover:text-black'>
                Watch Portfolio
              </span>
              <div className='h-5 w-[2px] bg-gray-500 group-hover:bg-red-500'></div>
              <span className='flex justify-center items-center gap-1'>
                <span className='text-red-500 group-hover:text-red-600'>
                  Live
                </span>
                <IoIosArrowRoundForward className='group-hover:text-red-600' />
              </span>
            </button>
          </div>

          <div className='hidden student md:flex flex-wrap w-full md:w-4/5 bg-gray-700/50 border-red-500 border mt-5 rounded-full p-2 px-5'>
            <div className="w-1/4 md:w-auto">
              <img
                width={40}
                height={40}
                className='border-2 border-white rounded-full'
                src='/avatars/client1.png'
                alt='Client'
              />
            </div>
            <div className='-ml-3 w-1/4 md:w-auto'>
              <img
                width={40}
                height={40}
                className='border-2 border-white rounded-full'
                src='/avatars/client2.png'
                alt='Client'
              />
            </div>
            <div className='-ml-3 w-1/4 md:w-auto'>
              <img
                width={40}
                height={40}
                className='border-2 border-white rounded-full'
                src='/avatars/client3.png'
                alt='Client'
              />
            </div>
            <div className='-ml-3 w-1/4 md:w-auto'>
              <img
                width={40}
                height={40}
                className='border-2 border-white rounded-full'
                src='/avatars/client4.png'
                alt='Client'
              />
            </div>
            <div className='-ml-3 w-1/4 md:w-auto'>
              <img
                width={40}
                height={40}
                className='border-2 border-white rounded-full'
                src='/avatars/client5.png'
                alt='Client'
              />
            </div>
            <div className='flex  items-center justify-end ml-3 w-full md:w-auto'>
              <span className='font-bold text-white text-lg'>
                <span className='text-red-500'>30+</span> Satisfied Clients
              </span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className='left flex-1 grid grid-cols-2 grid-rows-4 gap-5 md:gap-10 text-white justify-items-center'>
          <div className='relative w-full flex justify-center py-2 rounded-md border border-red-300 bg-gradient-to-r from-red-400 to-amber-700 before:absolute before:inset-0 before:rounded-md before:border-2 before:border-transparent before:bg-gradient-to-r before:from-red-300/60 before:to-transparent before:z-[-1] hover:scale-105 hover:shadow-red-500/30 transition-all duration-300'>
            <button className='font-semibold tracking-wide'>Web Design</button>
          </div>
          <div className='relative w-full flex justify-center py-2 rounded-md border border-sky-300 bg-gradient-to-r from-sky-400 to-sky-700 before:absolute before:inset-0 before:rounded-md before:border-2 before:border-transparent before:bg-gradient-to-r before:from-sky-300/60 before:to-transparent before:z-[-1] hover:scale-105 hover:shadow-sky-500/30 transition-all duration-300'>
            <button className='font-semibold tracking-wide'>
              Web Development
            </button>
          </div>
          <div className='relative w-full flex justify-center py-2 rounded-md border border-green-300 bg-gradient-to-r from-green-400 to-green-700 before:absolute before:inset-0 before:rounded-md before:border-2 before:border-transparent before:bg-gradient-to-r before:from-green-300/60 before:to-transparent before:z-[-1] hover:scale-105 hover:shadow-green-500/30 transition-all duration-300'>
            <button className='font-semibold tracking-wide'>
              Graphic Design
            </button>
          </div>
          <div className='relative w-full flex justify-center py-2 rounded-md border border-yellow-300 bg-gradient-to-r from-yellow-400 to-yellow-700 before:absolute before:inset-0 before:rounded-md before:border-2 before:border-transparent before:bg-gradient-to-r before:from-yellow-300/60 before:to-transparent before:z-[-1] hover:scale-105 hover:shadow-yellow-500/30 transition-all duration-300'>
            <button className='font-semibold tracking-wide'>
              Branding & Logo
            </button>
          </div>
          <div className='relative w-full flex justify-center py-2 rounded-md border border-purple-300 bg-gradient-to-r from-purple-400 to-purple-700 before:absolute before:inset-0 before:rounded-md before:border-2 before:border-transparent before:bg-gradient-to-r before:from-purple-300/60 before:to-transparent before:z-[-1] hover:scale-105 hover:shadow-purple-500/30 transition-all duration-300'>
            <button className='font-semibold tracking-wide'>Landing Pages</button>
          </div>
          <div className='relative w-full flex justify-center py-2 rounded-md border border-pink-300 bg-gradient-to-r from-pink-400 to-pink-700 before:absolute before:inset-0 before:rounded-md before:border-2 before:border-transparent before:bg-gradient-to-r before:from-pink-300/60 before:to-transparent before:z-[-1] hover:scale-105 hover:shadow-pink-500/30 transition-all duration-300'>
            <button className='font-semibold tracking-wide'>
              Custom Software
            </button>
          </div>
          <div className='relative w-full flex justify-center py-2 rounded-md border border-zinc-300 bg-gradient-to-r from-zinc-400 to-zinc-700 before:absolute before:inset-0 before:rounded-md before:border-2 before:border-transparent before:bg-gradient-to-r before:from-zinc-300/60 before:to-transparent before:z-[-1] hover:scale-105 hover:shadow-zinc-500/30 transition-all duration-300'>
            <button className='font-semibold tracking-wide'>
              Digital Marketing
            </button>
          </div>
          <div className='relative w-full flex justify-center py-2 rounded-md border border-orange-300 bg-gradient-to-r from-orange-400 to-orange-700 before:absolute before:inset-0 before:rounded-md before:border-2 before:border-transparent before:bg-gradient-to-r before:from-orange-300/60 before:to-transparent before:z-[-1] hover:scale-105 hover:shadow-orange-500/30 transition-all duration-300'>
            <button className='font-semibold tracking-wide'>
              Google My Business
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeCrack;
