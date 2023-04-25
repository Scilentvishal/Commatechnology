import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../data'

const Portfolio = () => {

  return (
    <section className="services_main bg-white">
      <div className="container md:px-5 md:py-24 py-16 text-center max-w-7xl mx-auto">
        <h3 className={`text-center text-black lg:text-4xl mx-auto md:text-2xl text-xl font-semibold font-mono max-w-2xl`}>Some of Our Great Stuffs</h3>
        <div className="flex flex-wrap -m-4 my-5">
          {
            projects.map((pro) => (

              <div key={pro.id} className="md:w-1/3 w-full px-3 text-black rounded-lg">
                <div className="card_main transition-all duration-500 ease-in-out hover:shadow-[0px_20px_20px_10px_#00000024]">
                  <div className="image relative h-60 md:w-full overflow-hidden w-[90%] mx-auto">
                    <Link href={`/portfolio/${pro.name}`}>
                      <Image fill className="mb-5 transition-all duration-500 ease-in-out hover:scale-125 hover:shadow-[0px_20px_20px_10px_#00000024]  object-cover mx-auto object-center" src={`/projects/${pro.img}`} alt="blog" />
                    </Link>
                  </div>
                  <div className="p-8">
                    <Link href={`/portfolio/${pro.name}`}>
                      <h3 className="title-font text-lg font-medium my-3 transition-all duration-500 ease-in-out hover:scale-110">
                        {pro.title}
                      </h3>
                    </Link>
                    <p className="leading-relaxed">{pro.description}</p>

                  </div>
                </div>
              </div>
            ))}

        </div>
      </div>
    </section>
  )
}

export default Portfolio