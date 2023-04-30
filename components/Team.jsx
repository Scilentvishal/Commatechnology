import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Team = () => {
    return (
        <div className="w-full bg-gradient-to-r px-[1rem] to-black from-[#0b0b3e]">
            <section className="container md:px-5 md:py-24 py-16 text-center max-w-7xl mx-auto">
                <div className="container px-5 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">OUR TEAM</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Meet our team of designer and developer</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center 
                            sm:justify-start justify-center text-center sm:text-left">
                                <Image alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover 
                                object-center sm:mb-0 mb-4" src="/img/vishal.png" width={700} height={700} />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-white">Vishal Rahangdale</h2>
                                    <h3 className="text-gray-500 mb-3">Web Developer</h3>
                                    <p className="mb-4 text-white">Web developer with 3+ year of experience with different web technologies.</p>
                                    <span className="inline-flex">
                                        <Link href="https://www.facebook.com/people/Vishal-Rahangdale/pfbid0rKnQVZyVsEW5fE36WqSoPboACJj6TzjEr1GAsQc2pT7NXSAiqRNAQ6Gmo5eyp2Wyl/"
                                            className="text-gray-500">
                                            <>
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-7 h-7" viewBox="0 0 24 24">
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </>
                                        </Link>
                                        <Link href="https://www.instagram.com/vishalmh_official_/" className="mx-6 text-gray-500">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-7 w-7"
                                                fill="currentColor"
                                                viewBox="0 0 24 24">
                                                <path
                                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        </Link>
                                        <Link href="https://www.youtube.com/@vishalrahangdale3624" className="text-gray-500">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-7 w-7"
                                                fill="currentColor"
                                                viewBox="0 0 24 24">
                                                <path
                                                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                            </svg>


                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start 
                            justify-center text-center sm:text-left">
                                <Image alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover 
                                object-center sm:mb-0 mb-4" src="/img/akash.png" width={700} height={700} />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-white">Akash Jamre</h2>
                                    <h3 className="text-gray-500 mb-3">Designer</h3>
                                    <p className="mb-4 text-white">He is an graphic designer with 3+ year of experience in
                                        graphic designing and video editing.</p>

                                    <span className="inline-flex">
                                        <Link href="https://www.facebook.com/akash.jamre.944" className="text-gray-500">
                                            <>
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-7 h-7" viewBox="0 0 24 24">
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </>
                                        </Link>
                                        <Link href="https://www.instagram.com/designer_akashjamre/" className="mx-6 text-gray-500">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-7 w-7"
                                                fill="currentColor"
                                                viewBox="0 0 24 24">
                                                <path
                                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        </Link>
                                        <Link href="https://www.youtube.com/@akashjamre7431" className="text-gray-500">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-7 w-7"
                                                fill="currentColor"
                                                viewBox="0 0 24 24">
                                                <path
                                                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                            </svg>


                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team