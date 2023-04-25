import Image from 'next/image';
import Head from './Head';
import Industries from './Industries';
import Portfolio from './Portfolio';
import Services from './Services';
import Team from './team';
import Prising from './Prising';
import Process from './Process';

const Main = () => {

  return (
    <div className=''>
      <Head />
      <Services />
      <Industries />
      <Portfolio />
      <Process />
      <Prising className="bg-white" />
      <Team />
    </div>
  )
}

export default Main