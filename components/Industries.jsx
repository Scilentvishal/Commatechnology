import Image from 'next/image';
import Link from 'next/link';
import { FaIndustry} from 'react-icons/fa';
import {GiHealthNormal, GiVideoCamera} from 'react-icons/Gi';
import {MdRealEstateAgent} from 'react-icons/md';

const Industries = () => {
    return (
        <div className="w-full bg-gradient-to-r px-[1rem] to-black from-[#0b0b3e]">
            <div className="max-w-7xl mx-auto md:py-24 py-16">
                <h3 className={`text-[#FE5B7C] font-mono`}>Industries We Serve</h3>
                <div className="flex relative md:flex-row flex-col md:justify-center items-center">
                    <div className="md:w-1/2 py-3 md:px-5 max-w-screen-md sm:px-3 ">
                        <h3 className='lg:text-4xl text-2xl font-mono font-black text-white'>
                            Web development Services Customised for your industries.
                        </h3>
                    </div>
                    <div className="md:w-1/2 py-3 md:px-5 sm:px-3 max-w-screen-md">
                        <p className='my-4 text-xl text-gray-400'>No matter the business. Comma Tecnologies will provide
                            you best customised websites for your business.</p>
                    </div>
                </div>
                <div className="flex py-3 items-center flex-wrap justify-center">
                    <div className="py-3 md:px-3 md:w-1/4 sm:w-1/3 w-full h-full items-center justify-center transition-colors duration-500
                border-solid align-middle text-white">
                        <div className="flex flex-col w-full justify-center border-[1px] sm:p-0 py-4 sm:aspect-square border-white items-center my-auto align-middle">
                            <FaIndustry className='text-[#FE5B7C] text-5xl mx-auto transition-all ease-in-outs hover:rotate-[360deg] cursor-pointer duration-500' />
                            <div className="px-8">
                                <h3 className="title-font text-lg text-center font-medium my-3">Industries & Manufacturing</h3>
                            </div>
                        </div>
                    </div>
                    <div className="py-3 md:px-3 md:w-1/4 sm:w-1/3 w-full h-full items-center justify-center transition-colors duration-500
                border-solid align-middle text-white">
                        <div className="flex flex-col w-full justify-center border-[1px] sm:p-0 py-4 sm:aspect-square border-white items-center my-auto align-middle">
                            <GiHealthNormal className='text-[#FE5B7C] text-5xl mx-auto transition-all ease-in-outs hover:rotate-[360deg] cursor-pointer duration-500' />
                            <div className="px-8">
                                <h3 className="title-font text-lg text-center font-medium my-3">Education & Health</h3>
                            </div>
                        </div>
                    </div>
                    <div className="py-3 md:px-3 md:w-1/4 sm:w-1/3 w-full h-full items-center justify-center transition-colors duration-500
                border-solid align-middle text-white">
                        <div className="flex flex-col w-full justify-center border-[1px] sm:p-0 py-4 sm:aspect-square border-white items-center my-auto align-middle">
                            <GiVideoCamera className='text-[#FE5B7C] text-5xl mx-auto transition-all ease-in-outs hover:rotate-[360deg] cursor-pointer duration-500' />
                            <div className="px-8">
                                <h3 className="title-font text-lg text-center font-medium my-3">Fashion & Photography</h3>
                            </div>
                        </div>
                    </div>
                    <div className="py-3 md:px-3 md:w-1/4 sm:w-1/3 w-full h-full items-center justify-center transition-colors duration-500
                border-solid align-middle text-white">
                        <div className="flex flex-col w-full justify-center border-[1px] sm:p-0 py-4 sm:aspect-square border-white items-center my-auto align-middle">
                            <MdRealEstateAgent className='text-[#FE5B7C] text-5xl mx-auto transition-all ease-in-outs hover:rotate-[360deg] cursor-pointer duration-500' />
                            <div className="px-8">
                                <h3 className="title-font text-lg text-center font-medium my-3">Real Estate</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Industries