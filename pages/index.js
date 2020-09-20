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
          <div class="pb-5 pt-12 text-5xl quicks font-extrabold text-center text-gray-800">
            Contact us
			    </div>
          <div className="w-full m-5 md:max-w-xl md:m-20">
            <ContactMessage />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
