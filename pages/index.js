import { Fragment } from 'react';
import Head from 'next/head';
import Testimonials from './component/Home/Testimonials';
import ContactMessage from './component/shared/ContactMessage';
import Services from './component/shared/Services';
import Gallery from './component/shared/Gallery';

export default function Home() {
  return (
    <Fragment>
      <Head>
        
      </Head>
      <div>
        <img src="/images/2.jpg" style={{
          width: '100vw',
          height: '90vh',
          objectFit: 'cover'
}}/>
        <Services />
        <Gallery/>
        <Testimonials />
        <div>
          <div className="py-10 pt-16 text-3xl sm:text-5xl quicks font-extrabold text-center text-gray-800">
            Contact us
			    </div>
          <div className="w-full p-5 pb-10 md:max-w-3xl md:pl-20 md:pb-20">
            <ContactMessage />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
