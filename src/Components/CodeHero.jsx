import React from 'react'
import { PiSealCheckDuotone } from "react-icons/pi";
import './CodeHero.css'
const CodeHero = () => {
    return (
        <div className='@contianer '>
            <div className="flex items-center justify-center bg-black text-white py-7 pt-20">
                <h1 className='text-7xl font-extrabold'>Research</h1>
                <span className='text-7xl font-extrabold mx-4 text-red-500'>.</span>
                <h1 className='text-7xl font-extrabold'>Design</h1>
                <span className='text-7xl font-extrabold mx-4 text-red-500'>.</span>
                <h1 className='text-7xl font-extrabold'>Develop</h1>
            </div>
            <div className="flex items-center justify-center bg-black text-white py-2 pb-10">
                <span className='h-[1px] w-40 bg-linear-to-r from-transparent to-red-500'></span>
                <span className='h-2 w-2 mx-3 rounded-full bg-red-500'></span>
                <span className='h-[1px] w-40 bg-linear-to-l from-transparent to-red-500'></span>
            </div>

            <div className="bg-black text-white pt-5 pb-20">
                <div className="bg-gradient-to-r from-black to-red-700/20 border-2 border-red-500/20 rounded-lg p-10 mx-auto flex justify-between gap-10 max-w-6xl">
                    <div className="flex-1">
                        <h2 className="text-4xl font-extrabold">
                            SUPREME <span className="text-red-500">4.0 </span>is Finally LIVE
                        </h2>

                        <div className="flex p-6">
                            <div className="py-4 flex flex-col gap-4">
                                <div className="icon-box flex items-start gap-3">
                                    <PiSealCheckDuotone className="text-green-400 text-3xl" />
                                    <p className="text-zinc-400">
                                        <span className="text-white font-bold">The future</span> of coding education is here with AI-driven learning.
                                    </p>
                                </div>
                                <div className="icon-box flex items-start gap-3">
                                    <PiSealCheckDuotone className="text-green-400 text-3xl" />
                                    <p className="text-zinc-400">
                                        <span className="text-white font-bold">Organized & Curated learning</span> through structured modules.
                                    </p>
                                </div>
                                <div className="icon-box flex items-start gap-3">
                                    <PiSealCheckDuotone className="text-green-400 text-3xl" />
                                    <p className="text-zinc-400">
                                        <span className="text-white font-bold">Learn from experts</span> with interactive problem-solving sessions.
                                    </p>
                                </div>
                                <div className="icon-box flex items-start gap-3">
                                    <PiSealCheckDuotone className="text-green-400 text-3xl" />
                                    <p className="text-zinc-400">
                                        <span className="text-white font-bold">Real-world projects</span> to apply your knowledge in coding.
                                    </p>
                                </div>

                            </div>

                            <div className="py-4 flex flex-col gap-4">
                                <div className="icon-box flex items-start gap-3">
                                    <PiSealCheckDuotone className="text-green-400 text-3xl" />
                                    <p className="text-zinc-400">
                                        <span className="text-white font-bold">24/7 support</span> from mentors to guide your coding journey.
                                    </p>
                                </div>
                                <div className="icon-box flex items-start gap-3">
                                    <PiSealCheckDuotone className="text-green-400 text-3xl" />
                                    <p className="text-zinc-400">
                                        <span className="text-white font-bold">Live coding challenges</span> to test and improve your skills.
                                    </p>
                                </div>
                                <div className="icon-box flex items-start gap-3">
                                    <PiSealCheckDuotone className="text-green-400 text-3xl" />
                                    <p className="text-zinc-400">
                                        <span className="text-white font-bold">Certifications</span> to boost your career opportunities.
                                    </p>
                                </div>
                                <div className="icon-box flex items-start gap-3">
                                    <PiSealCheckDuotone className="text-green-400 text-3xl" />
                                    <p className="text-zinc-400">
                                        <span className="text-white font-bold">Custom learning paths</span> tailored to your coding goals.
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="timer w-full flex justify-between gap-5">

                            <div className="time-box flex flex-col justify-center items-center w-full flex-1">
                                <div className="bg-red-900/20 flex justify-center items-center border border-red-900/50 text-5xl p-5 rounded-md w-full">
                                    00
                                </div>
                                <span className="uppercase text-sm mt-2 text-red-400">Days</span>
                            </div>


                            <div className="time-box flex flex-col justify-center items-center w-full flex-1">
                                <div className="bg-red-900/20 flex justify-center items-center border border-red-900/50 text-5xl p-5 rounded-md w-full">
                                    00
                                </div>
                                <span className="uppercase text-sm mt-2 text-red-400">Hours</span>
                            </div>


                            <div className="time-box flex flex-col justify-center items-center w-full flex-1">
                                <div className="bg-red-900/20 flex justify-center items-center border border-red-900/50 text-5xl p-5 rounded-md w-full">
                                    00
                                </div>
                                <span className="uppercase text-sm mt-2 text-red-400">Minutes</span>
                            </div>


                            <div className="time-box flex flex-col justify-center items-center w-full flex-1">
                                <div className="bg-red-900/20 flex justify-center items-center border border-red-900/50 text-5xl p-5 rounded-md w-full">
                                    00
                                </div>
                                <span className="uppercase text-sm mt-2 text-red-400">Seconds</span>
                            </div>
                        </div>



                    </div>


                    <div>
                        <div className="bg-gray-600/40 border border-gray-300/20 rounded-md w-[400px] p-5 py-6 relative">
                            <div className="relative">
                                <img className="rounded-md" src="/DSA-img.webp" width={400} alt="DSA Supreme 4.0" />
                                <button className="absolute -top-8 -left-10 bg-red-500 px-4  py-2 rounded-md text-white font-bold shadow-lg animate-custom-bounce select-none">
                                    New
                                </button>
                            </div>

                            <div className="flex flex-col items-center gap-5 mt-5">
                                <h3 className="text-2xl font-bold text-center select-none">
                                    Data Structures & Algorithms [SUPREME 4.0]
                                </h3>
                                <div className="h-[2px] w-full bg-gray-300 opacity-10"></div>
                                <button className="bg-red-500 px-5 py-2 rounded-md cursor-pointer font-bold hover:bg-red-600 transition">
                                    Go To Supreme
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default CodeHero
