import Image from 'next/image';
import Link from 'next/link';

const Head = () => {
  return (
    <div className="w-full bg-gradient-to-r to-black from-[#0b0b3e]">
    <div className="flex flex-col-reverse relative lg:flex-row lg:justify-center items-center lg:h-[90vh] max-w-7xl mx-auto">
    <div className="lg:w-1/2 md:py-3 py-16 px-3 max-w-screen-md">

      <h1 className='lg:text-6xl text-4xl font-mono font-black text-white'>We provide best<br /> Web Solution solution
      </h1>
      <p className='my-4 text-xl text-gray-400'>Elevate your online presence with Comma Technologies. We specialize in crafting stunning static and dynamic websites, optimized for search engines using Next.js technology. Choose us to stand out from the competition and leave a lasting impression on your audience.</p>
      <button className='font-mono bg-[#FE5B7C] border-l-4 border-white hover:bg-[#c91e41] text-white font-semibold hover:text-white py-4 px-6 '><Link href="/contact">Contact Us</Link></button>
    </div>
    <div className="lg:w-1/2 py-3 relative w-full h-[80vh]">
      <Image src="/img/webdevelopment.jpg" className='mx-auto'
        alt='webdevelopment' fill style={{ objectFit: "cover" }} responsive="true" />
    </div>
  </div>
  </div>
  )
}

export default Head