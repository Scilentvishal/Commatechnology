import Form from './Form'
import { FaWhatsapp} from 'react-icons/fa';

const Contact = () => {
 
  return (
    <>
      <section className="text-gray-600 body-font relative 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-lg items-center px-3 py-3">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden flex flex-col align-middle justify-start sm:mr-10 p-10 relative">
            <h3 className='text-3xl font-extrabold mb-5'>Lets Take An Initiative</h3>
            <div>
            <p className="mb-3">Welcome to our India-based web development agency, dedicated to helping small businesses establish an online presence and increase their revenue. With a focus on user-centered design and development, we have successfully completed over 10 projects, providing custom solutions tailored to meet the unique needs of our clients. Whether youre looking to build a new website, redesign an existing one, or need help with digital marketing, our team of experienced professionals is here to help. Contact us today to learn more about how we can help your business grow and succeed online.</p>
           <address>
            <h3>Address</h3>
           <b> Karala Road, Sahuji Nagar, Satoda, Wardha, Maharashtra</b>
            <br />
           <a href="https://wa.me/+919307924239" className='flex align-middle text-center my-3 text-green-500'><FaWhatsapp className='text-2xl  mr-2' /> Contact us on WhatsApp</a>
           </address>
           </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 px-4 bg-white py-3 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
           <Form />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
