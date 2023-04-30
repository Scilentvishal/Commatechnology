import Image from 'next/image';
import Link from 'next/link';
import { Serv } from '../../data';
const Services = () => {
  return (
    <section className="services_main bg-white">
      <div className="container md:px-5 md:py-24 py-16 text-center max-w-7xl mx-auto">
        <h3 className={`text-center text-[#FE5B7C] font-mono`}>Our Services</h3>
        <h3
          className={`text-center text-black lg:text-4xl mx-auto md:text-2xl text-xl font-semibold font-mono max-w-2xl`}
        >
          Web Development solutions for startup and enterprises
        </h3>

        <div className="flex flex-wrap my-5">
          {Serv.map((service) => (
            <div key={service.id} className="p-3 lg:w-1/3  sm:w-1/2 w-full">
              <div className="flex flex-col rounded-t-xl shadow-[0px_0px_8px_0px_#edf2f7]">
                <div className="img overflow-hidden relative doverflow-hidden bg-white rounded-xl">
                  <Image
                    width={300}
                    height={300}
                    className="w-full hover:scale-125 transition-all -bottom-3 object-cover object-center"
                    src={`/icons/${service.img}`}
                    alt="blog"
                  />
                </div>
                <div className="body px-8 py-3 text-black">
                  <h3 className="title-font text-xl font-semibold my-3 text-red-600">
                    {service.name}
                  </h3>
                  <p className="leading-relaxed">{service.description}</p>
                  <button className="font-mono my-4 rounded-md bg-[#FE5B7C] hover:bg-[#c91e41] text-white font-semibold hover:text-white py-2 px-6">
                    <Link href="/contact" className="text-lg">
                      Know More
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
