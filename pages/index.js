import { Fragment } from 'react';
import Head from 'next/head';
import Testimonials from './component/Home/Testimonials';
import ContactMessage from './component/shared/ContactMessage';

export default function Home() {
  return (
    <Fragment>
      <Head>
        
      </Head>
      <div>
        <img src="/images/1.png" />
        <Testimonials />
        <div>
          <div class="py-10 sm:py-20 text-3xl sm:text-5xl quicks font-extrabold text-center text-gray-800">
            Contact us
			    </div>
          <div className="w-full p-5 md:max-w-xl md:m-20">
            <ContactMessage />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
