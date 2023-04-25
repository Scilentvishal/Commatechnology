import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <>
      <div className='bg-gradient-to-r to-black from-[#0b0b3e]'>
        <div className="flex  flex-col-reverse relative md:flex-row md:justify-center max-w-7xl items-center md:px-3 md:py-3 md:pt-24 pb-16 mx-auto">
          <div className="md:w-1/2 md:py-6 pb-6 lg:px-8 md:px-4 px-2" style={{ maxWidth: "600px" }}>
            <div className="bg-white lg:py-8 lg:px-8 px-4 py-4">

              <h3 className='lg:text-4xl text-2xl font-mono font-black text-[#FE5B7C]'>Welcome To
                <br />
                Comma Technologies</h3>
              <p className='my-4 text-xl text-gray-400'>At Comma Technologies, we create custom, responsive websites that are tailored to the unique needs of each of our clients.
              </p>
              <button className='font-mono bg-black text-white font-semibold py-2 px-4 border'><Link href="/">
                know more
              </Link>
              </button>
            </div>
          </div>
          <div className="md:w-1/2 w-full py-3 relative lg:h-[600px] h-[50vh]">
            <Image src="/img/webdevelopment.jpg" className='lg:mr-auto mx-auto'
              alt='' fill style={{ objectFit: "cover" }} responsive="true" />
          </div>
        </div>
      </div>
      <div className="bg-white text-black md:py-16">
        <div className="max-w-7xl items-center md:px-3 md:py-3 mx-auto">
          <div className="flex flex-col relative md:flex-row md:justify-center items-center p-3 
          mx-auto">
            <div className="md:w-1/2 w-full py-3 relative lg:h-[400px] h-[50vh]">
              <Image src="/img/laptop.jpg" className='lg:ml-auto mx-auto'
                alt='' fill style={{ objectFit: "cover" }} responsive="true" />
            </div>
            <div className="md:w-1/2 md:py-6 lg:px-8 md:px-4 px-0">
              <div className="">
                <h3 className='lg:text-4xl text-2xl font-mono font-black text-[#FE5B7C]'>About Comma Technologies</h3>
                <p>At Comma Technologies, we are passionate about creating innovative web solutions that empower businesses to
                  succeed in the digital world. Our team of expert developers, designers, and digital strategists work
                  collaboratively to deliver custom web development solutions that meet the unique needs of our clients.
                  From website design to web application development, we pride ourselves on providing exceptional service
                  and quality work that exceeds expectations. Thank you for considering Comma Technologies for your web
                  development needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About