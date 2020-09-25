import { Fragment, useState, useEffect } from 'react';
import Head from 'next/head';
import Testimonials from './component/Home/Testimonials';
import ContactMessage from './component/shared/ContactMessage';
import Services from './component/shared/Services';
import Gallery from './component/shared/Gallery';
import BlurImage from './component/shared/BlurImage';
import Map from './component/shared/Map';
import useIsInViewport from 'use-is-in-viewport'
import GetQuote from './component/shared/GetQuote';

export default function Home() {
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 50 });
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    if (isInViewport && !showMap) {
      setShowMap(true);
    }
  }, [isInViewport]);

  return (
    <Fragment>
      <div>
        <BlurImage src1='/images/1-blur.jpg' src2='/images/2.jpg' style={{ width: '100vw', height: '90vh', objectFit: 'cover' }} />
        <Services />
        <Gallery/>
        <Testimonials />
        <GetQuote/>
        <div ref={targetRef}>
          <div className="py-10 text-3xl sm:text-5xl quicks font-extrabold text-center text-gray-800">
            Contact us
			    </div>
          <div className="w-full p-5 pb-10 md:pb-20 md:px-32 md:mx-2">
            <div className="flex flex-col md:flex-row">
              <ContactMessage />
              {/* {showMap ? <Map className="w-full h-64 md:h-auto mapBg rounded" /> : <div className="w-full mapBg rounded"/>} */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
