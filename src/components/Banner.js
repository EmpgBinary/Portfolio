import React from 'react';
import Image from '../assets/avatar.svg';
import { FaGithub, FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
// import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Banner = () => {
  return < section className='min-h-[85vh] lg:min-h-[78vh] flex items-center'id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center ig:gap-x-12'>
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <h1

            className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
            Ezekiel <span>Nkem</span>
          </h1>
          <div className='mb-6 text-[35px] lg:text-[45px] font-primary font-primary uppercase leading-[1]'>
            <span className='text-white mr-4'>I am a</span> 
            <TypeAnimation
              sequence={[
                'Developer',
                2000,
                'Designer',
                2000,
                'Robotics Expert',
                2000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            />
           </div>
          
           <p className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Hi, I am a software engineer who loves to create websites as well as apps for people.
              I simply enjoy working with codes, developing beautiful websites, and creating useful and fun robots.
          </p>
          
          <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <a href='#contact'><button className='btn btn-lg'>Contact me</button></a>

            
            <a href='#' className='text-gradient btn-link'>
              My Portfolio
            </a>
            
            <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>

            </div>
          </div>
          <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href='https://web.facebook.com/ugweje1' target='_blank'>
              <FaFacebook/>
            </a>
            <a href='https://github.com/EmpgBinary' target= 'blank'>
              <FaGithub/>
            </a>
            <a href='https://www.instagram.com/empg_binary/'>
              <FaInstagram/>
              
            </a>
            <a href='https://api.whatsapp.com/send/?phone=2348140258500'>
              <FaWhatsapp/>
              
            </a>
              <a href='https://www.linkedin.com/in/ezekiel-ugweje-letsconnect/'>
              <FaLinkedin/>
              
            </a>

          </div>
        </div>
        <div className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] '>
          <img src={Image} alt=''/>
        </div>
      </div>
  </div>
  </section>;
};

export default Banner;
