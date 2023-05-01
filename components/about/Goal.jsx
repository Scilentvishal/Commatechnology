import Box from './Box';
import { AiFillEye, AiFillFlag } from 'react-icons/Ai';

const Goal = (props) => {
  return (
    <div className={`${props.class} border-b-2`}>
      <section className="container md:px-5 md:py-24 py-16 text-center max-w-7xl mx-auto">
        <h3 className="text-center mx-auto lg:text-4xl text-2xl text-white font-mono font-black">
          Our Mission <span className="text-red-500">& Vision</span>
        </h3>
        <div className="flex text-center md:flex-row flex-col justify-center">
          <div className="md:w-1/2 w-full md:p-5 py-5">
            <Box
              class="bg-red-500 text-white"
              title="Vision"
              text="The vision of Comma Technologies is to enhance and exponentially improve our customers businesses. Using creative design and development, we bring high-quality, a market-defining solution for your business, which creates value and adds to your competitive advantage. We aim at being consistent and dedicated such that we grow at a limitless pace to become a major Web Development service provider. Comma Technologies aims at becoming an outstanding performer by being a reliable, trustworthy and competent name and partner for all IT enterprises by delivering consistent and the best in town solutions. A journey with us is the sure path to success, as we are capable of providing solutions within deadlines."
              icon={<AiFillEye className="inline" />}
            />
          </div>
          <div className="md:w-1/2 w-full md:p-5 py-5">
            <Box
              class="bg-blue-500 text-white"
              title="Mission"
              text="Comma Technologies aim at delivering optimal solutions for our clientele at surprisingly affordable rates, considering the services and the quality of our services. Our topmost priority is to provide customer satisfaction. We specialise in friendly dealings, reasonable prices and excellent customer satisfaction. Our services and products are exclusive as a result of the innovation process of our team. Thanks to the efficiency of the team, we have been able to retain as well as expand our client as well as our range of services for our customers. We at Comma Technologies value your dreams and help you in fulfilling your missions. We trusts in your dreams and goals, so with us, you achieve more than you expect."
              icon={<AiFillFlag className="inline" />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Goal;
