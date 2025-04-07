import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const CodeCrack = () => {
    return (
        <div className="bg-black py-5 pb-10">
            <div className="flex justify-center gap-10 max-w-6xl mx-auto ">
                <div className="left flex-1 flex flex-col gap-2">
                    <h2 className="text-5xl text-white font-bold">
                        Crack the Code to Success with CodeHelp
                    </h2>
                    <p className="text-gray-300 my-3">
                        Elevate your programming skills, solve challenges, and unlock the world of coding possibilities.
                    </p>
                    <div className="btn-container flex gap-5 mt-4">
                        <button className="bg-indigo-500 hover:bg-indigo-600 rounded-full px-5 py-3 font-bold text-white">
                            View Courses
                        </button>
                        <button className="group bg-gray-700/50 hover:bg-white border-red-500  border rounded-full px-5 py-3 text-white flex gap-3 justify-center items-center transition-all duration-300">
                            <span className='font-bold group-hover:text-black'> Watch Video</span>
                            <div className="h-5 w-[2px] bg-gray-500 group-hover:bg-red-500"></div>
                            <span className="flex justify-center items-center gap-1">
                                <span className='text-red-500 group-hover:text-red-600'> Live</span> <IoIosArrowRoundForward className='group-hover:text-red-600' />
                            </span>
                        </button>
                    </div>

                    <div className="student flex  w-4/5 bg-gray-700/50 border-red-500 border mt-5 rounded-full p-2 px-5">
                        <div>
                            <img
                                width={40}
                                height={40}
                                className="border-2 border-white rounded-full"
                                src="https://www.codehelp.in/_next/image?url=https%3A%2F%2Fcdn.thecodehelp.in%2FScreenshot_2022_11_19_161704_fe89795d3e.png&w=640&q=75"
                                alt=""
                            />
                        </div>
                        <div className="-ml-3">
                            <img
                                width={40}
                                height={40}
                                className="border-2 border-white rounded-full"
                                src="https://www.codehelp.in/_next/image?url=https%3A%2F%2Fcdn.thecodehelp.in%2FScreenshot_2022_11_19_161704_fe89795d3e.png&w=640&q=75"
                                alt=""
                            />
                        </div>
                        <div className="-ml-3">
                            <img
                                width={40}
                                height={40}
                                className="border-2 border-white rounded-full"
                                src="https://www.codehelp.in/_next/image?url=https%3A%2F%2Fcdn.thecodehelp.in%2FScreenshot_2022_11_19_161704_fe89795d3e.png&w=640&q=75"
                                alt=""
                            />
                        </div>
                        <div className="-ml-3">
                            <img
                                width={40}
                                height={40}
                                className="border-2 border-white rounded-full"
                                src="https://www.codehelp.in/_next/image?url=https%3A%2F%2Fcdn.thecodehelp.in%2FScreenshot_2022_11_19_161704_fe89795d3e.png&w=640&q=75"
                                alt=""
                            />
                        </div>
                        <div className="-ml-3">
                            <img
                                width={40}
                                height={40}
                                className="border-2 border-white rounded-full"
                                src="https://www.codehelp.in/_next/image?url=https%3A%2F%2Fcdn.thecodehelp.in%2FScreenshot_2022_11_19_161704_fe89795d3e.png&w=640&q=75"
                                alt=""
                            />
                        </div>
                        <div className=' flex items-center justify-end ml-3'>
                            <span className='font-bold text-white text-lg items-end'> <span className="text-red-500">70,000+</span> Happy Students</span>
                        </div>
                    </div>

                </div>

                <div className="left flex-1 grid grid-cols-2  grid-row-4 gap-10 text-white justify-items-center">
                    <div className=' border-red-300 border bg-gradient-to-r from-red-400 to-amber-700 grid-1 w-full flex justify-center py-1 rounded-md'><button className=''>01</button></div>
                    <div className=' border-sky-300 border bg-gradient-to-r from-sky-400 to-sky-700 grid-1 w-full flex justify-center py-1 rounded-md'><button className=''>01</button></div>
                    <div className=' border-green-300 border bg-gradient-to-r from-green-400 to-green-700 grid-1 w-full flex justify-center py-1 rounded-md'><button className=''>01</button></div>
                    <div className=' border-yellow-300 border bg-gradient-to-r from-yellow-400 to-yellow-700 grid-1 w-full flex justify-center py-1 rounded-md'><button className=''>01</button></div>
                    <div className=' border-purple-300 border bg-gradient-to-r from-purple-400 to-purple-700 grid-1 w-full flex justify-center py-1 rounded-md'><button className=''>01</button></div>
                    <div className=' border-pink-300 border bg-gradient-to-r from-pink-400 to-pink-700 grid-1 w-full flex justify-center py-1 rounded-md'><button className=''>01</button></div>
                    <div className=' border-zinc-300 border bg-gradient-to-r from-zinc-400 to-zinc-700 grid-1 w-full flex justify-center py-1 rounded-md'><button className=''>01</button></div>
                    <div className=' border-orange-300 border bg-gradient-to-r from-orange-400 to-orange-700 grid-1 w-full flex justify-center py-1 rounded-md'><button className=''>01</button></div>
                    
                </div>
            </div>
        </div>

    )
}

export default CodeCrack
