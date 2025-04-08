import React from 'react';
import { PiSealCheckDuotone } from 'react-icons/pi';
import './CodeHero.css';

const CodeHero = () => {
  return (
    <div className='@contianer'>
      <div className='flex items-center justify-center bg-black text-white py-7 pt-20'>
        <h1 className='text-3xl md:text-7xl font-extrabold'>Design</h1>
        <span className='text-3xl md:text-7xl font-extrabold mx-4 text-red-500'>.</span>
        <h1 className='text-3xl md:text-7xl font-extrabold'>Develop</h1>
        <span className='text-3xl md:text-7xl font-extrabold mx-4 text-red-500'>.</span>
        <h1 className='text-3xl md:text-7xl font-extrabold'>Deliver</h1>
      </div>
      <div className='flex items-center justify-center bg-black text-white py-2 pb-10'>
        <span className='h-[1px] w-40 bg-linear-to-r from-transparent to-red-500'></span>
        <span className='h-2 w-2 mx-3 rounded-full bg-red-500'></span>
        <span className='h-[1px] w-40 bg-linear-to-l from-transparent to-red-500'></span>
      </div>

      <div className='bg-black text-white pt-5 pb-20'>
        <div className='bg-gradient-to-r from-black to-red-700/20 border-2 border-red-500/20 rounded-lg p-5 py-10 mx-auto flex justify-between gap-10 max-w-6xl flex-col md:flex-row'>
          <div className='flex-1'>
            <h2 className='text-3xl md:text-4xl font-extrabold'>
              Transform Your Business with Expert <span className='text-red-500'>Design & Development</span>
            </h2>

            <div className='flex p-3 flex-col md:flex-row'>
              <div className='py-4 flex flex-col gap-4'>
                <div className='icon-box flex items-start gap-3'>
                  <PiSealCheckDuotone className='text-green-400 text-3xl' />
                  <p className='text-zinc-400'>
                    <span className='text-white font-bold'>Custom Website Design</span> tailored to your brand and goals.
                  </p>
                </div>
                <div className='icon-box flex items-start gap-3'>
                  <PiSealCheckDuotone className='text-green-400 text-3xl' />
                  <p className='text-zinc-400'>
                    <span className='text-white font-bold'>Responsive Web Development</span> to ensure your site works seamlessly across all devices.
                  </p>
                </div>
                <div className='icon-box flex items-start gap-3'>
                  <PiSealCheckDuotone className='text-green-400 text-3xl' />
                  <p className='text-zinc-400'>
                    <span className='text-white font-bold'>SEO Optimization</span> to improve your website's visibility and drive traffic and revenue.
                  </p>
                </div>
              </div>

              <div className='py-4 flex flex-col gap-4'>
                <div className='icon-box flex items-start gap-3'>
                  <PiSealCheckDuotone className='text-green-400 text-3xl' />
                  <p className='text-zinc-400'>
                    <span className='text-white font-bold'>Brand Identity & Graphics</span> to make your business stand out.
                  </p>
                </div>
                <div className='icon-box flex items-start gap-3'>
                  <PiSealCheckDuotone className='text-green-400 text-3xl' />
                  <p className='text-zinc-400'>
                    <span className='text-white font-bold'>Landing Pages & Marketing Sites</span> designed for conversions and leads.
                  </p>
                </div>
                <div className='icon-box flex items-start gap-3'>
                  <PiSealCheckDuotone className='text-green-400 text-3xl' />
                  <p className='text-zinc-400'>
                    <span className='text-white font-bold'>Web Maintenance & Support</span> to ensure your site runs smoothly.
                  </p>
                </div>
              </div>
            </div>

            <div className='w-full flex px-8'>
              <button className='bg-red-500 px-6 py-3 rounded-md text-white font-bold hover:bg-red-600 transition'>
                Get Started Today
              </button>
            </div>
          </div>

          <div className='w-full md:w-auto'>
            <div className='bg-gray-600/40 border border-gray-300/20 rounded-md w-full md:w-[400px] p-5 py-6 relative'>
              <div className='relative'>
                <img className='rounded-md' src='/DSA-img.webp' alt='Business Solution' />
                <button className='absolute -top-8 -left-10 bg-red-500 px-4 py-2 rounded-md text-white font-bold shadow-lg animate-custom-bounce select-none'>
                  New
                </button>
              </div>

              <div className='flex flex-col items-center gap-5 mt-5'>
                <h3 className='text-2xl font-bold text-center select-none'>
                  Custom Solutions for Your Business Needs
                </h3>
                <div className='h-[2px] w-full bg-gray-300 opacity-10'></div>
                <button className='bg-red-500 px-5 py-2 rounded-md cursor-pointer font-bold hover:bg-red-600 transition'>
                  Contact Me for a Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeHero;
