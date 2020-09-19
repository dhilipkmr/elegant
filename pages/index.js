import { Fragment } from 'react';
import Head from 'next/head';
import NavBar from './Component/NavBar';
import HeroCarousel from './Component/HeroCarousel';
import Footer from './Component/Footer';
import Testimonials from './Component/Testimonials';

export default function Home() {
  // function nextSlide() {
  //   let activeSlide = document.querySelector('.slide.translate-x-0');
  //   activeSlide.classList.remove('translate-x-0');
  //   activeSlide.classList.add('-translate-x-full');

  //   let nextSlide = activeSlide.nextElementSibling;
  //   nextSlide.classList.remove('translate-x-full');
  //   nextSlide.classList.add('translate-x-0');
  // }

  // function previousSlide() {
  //   let activeSlide = document.querySelector('.slide.translate-x-0');
  //   activeSlide.classList.remove('translate-x-0');
  //   activeSlide.classList.add('translate-x-full');

  //   let previousSlide = activeSlide.previousElementSibling;
  //   previousSlide.classList.remove('-translate-x-full');
  //   previousSlide.classList.add('translate-x-0');
  // }
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <NavBar />
      {/* <HeroCarousel nextSlide={nextSlide} previousSlide={previousSlide}/> */}
      <img src="/images/1.png" />
      {/* <Offerings/> */}
      <Testimonials/>
      <Footer/>
    </Fragment>
  );
}
