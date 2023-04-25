import Image from 'next/image';
import Link from 'next/link';


const Services = () => {

  return (
    <section className="services_main bg-white">
      <div className="container md:px-5 md:py-24 py-16 text-center max-w-7xl mx-auto">
        <h3 className={`text-center text-[#FE5B7C] font-mono`}>Our Services</h3>
        <h3 className={`text-center text-black lg:text-4xl mx-auto md:text-2xl text-xl font-semibold font-mono max-w-2xl`}>Web Development solutions for startup and enterprises</h3>
        <div className="flex flex-wrap -m-4 my-5">
          <div className="px-2 py-9 md:w-1/3 sm:w-1/2 cursor-pointer transition-colors duration-500 text-black hover:text-white hover:bg-[#FE5B7C] rounded-lg">
            <div className="card_main">
              <Image width={100} height={100} className="h-24 w-24 mb-5 object-cover mx-auto object-center" src="/img/staticweb.png" alt="blog" />
              <div className="px-8">
                <h3 className="title-font text-lg font-medium my-3">Static website development</h3>
                <p className="leading-relaxed">They are perfect for businesses that dont require frequent updates or have a smaller budget.</p>

              </div>
            </div>
          </div>
          <div className="px-2 py-9 md:w-1/3 sm:w-1/2 cursor-pointer transition-colors duration-500 text-black hover:text-white hover:bg-[#FE5B7C] rounded-lg">
            <div className="card_main">
              <Image width={100} height={100} className="h-24 w-24 mb-5 object-cover mx-auto object-center" src="/img/Dynamic_Website-512.webp" alt="blog" />
              <div className="px-8">
                <h3 className="title-font text-lg font-medium my-3">Dynamic website development</h3>
                <p className="leading-relaxed">Dynamic website development involves creating web pages with dynamic content that changes based on user interaction or other external factors.</p>

              </div>
            </div>
          </div>
          <div className="px-2 py-9 md:w-1/3 sm:w-1/2 cursor-pointer transition-colors duration-500 text-black hover:text-white hover:bg-[#FE5B7C] rounded-lg">
            <div className="card_main">
              <Image width={100} height={100} className="h-24 w-24 mb-5 object-cover mx-auto object-center" src="/img/nextjs.svg" alt="blog" />
              <div className="px-8">
                <h3 className="title-font text-lg font-medium my-3">NextJs website development</h3>
                <p className="leading-relaxed">By using Next.js, developers can streamline the process of creating web applications and provide a faster, more responsive experience for users.</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services