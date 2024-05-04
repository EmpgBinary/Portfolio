import React from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

import Img1 from '../assets/hack.PNG'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'
import Img4 from '../assets/hack1.PNG'

const Work = () => {
  return <section className='section' id='work'>
    <div className='container mx-auto'> 
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <div>
            <h2 className='h2 leading-tight text-accent'>
              My Latest project <br />
              
            </h2>
            <p className='max-w-sm mb-16'>  My project is aimed at helping undergraduates in Nigeria to make better choices in choosing their various career paths. Coming soon!!!!<br /></p>
            <button className='btn btn-sm'>View all projects</button>
          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img src={Img1} alt='' />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>
                UI/UX Design
              </span>
            </div>
            <div className= 'absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Hackathon 1</span>
            </div>
          </div>
        </div>
        <div className='flex-1'>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img src={Img4} alt='' />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>
                UI/UX Design
              </span>
            </div>
            <div className= 'absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Programmers Hackathon</span>
            </div>
          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img src={Img3} alt='' />
             <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>
                UI/UX Design
              </span>
            </div>
            <div className= 'absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Crypto Currency Trading </span>
            </div>
          </div>
        </div>
      </div>
      </div> 
    
  </section>

};

export default Work;
 