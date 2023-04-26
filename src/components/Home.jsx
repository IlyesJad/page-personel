import React, { useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import HeroImage from '../assets/img/fp.jpg'
import { Link } from 'react-scroll';
import Aos from 'aos'
import 'aos/dist/aos.css'



const Home = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
    },[])
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#0a192f]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
      <p data-aos="fade-up" data-aos-duration="2000" className='text-pink-600'>Hi, my name is</p>
      <h1 data-aos="fade-up" data-aos-duration="2500" className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Ilyes Jad
        </h1>
        <h2 data-aos="fade-up" data-aos-duration="3000" className="text-4xl sm:text-7xl font-bold text-white">
          I'm a Full Stack Developer
        </h2>
        <p  data-aos="fade-up" data-aos-duration="4000"className="text-gray-500 py-4 max-w-md">
        i am a Full Stack JavaScript Developer proficient in developing complex and interactive
        web applications and problem solving, i have good understanding of web technologies such as HTML, CSS, and JavaScript and
        JavaScript frameworks such as React, Angular as well as i have a strong knowlage about Node.js and espress
        for back-end development.
        </p>

        <div>
          <Link
            to="portfolio"
            smooth
            duration={500}
            data-aos="fade-up" data-aos-duration="5000"
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            Portfolio
            <span  className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-1" />
            </span>
          </Link>
        </div>
      </div>

      <div data-aos="fade-left" data-aos-duration="2000">
        <img
          src={HeroImage}
          alt="my profile"
          className="image"
        />
      </div>
    </div>
  </div>
  );
};

export default Home;
