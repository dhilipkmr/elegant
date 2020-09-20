import { Fragment } from 'react';
import Head from 'next/head';
import Testimonials from './component/Home/Testimonials';

export default function Home() {
  return (
    <Fragment>
      <Head>
        
      </Head>
      <div>
        <img src="/images/1.png" />
        <Testimonials />
      </div>
    </Fragment>
  );
}
