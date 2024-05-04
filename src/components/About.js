

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import image from '../assets/broT.png'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center lg:gap-x-20'>
          <div className='flex-1 bg-contain bg-no-repeat bg-top h-[300px] lg:h-[450px] mix-blend-lighten bg-top'>
            <img src={image} alt='' className='object-contain h-full w-full' />
          </div>
          <div className='flex-1 ml-1'>
            <h2 className='h2 text-accent'>About me.</h2>  
              <h3 className ="h3 mb-6" >
                </h3>       
                <p className='mb-6'>
              As a robotics engineer, I design prototypes, build and tests machines, and maintain the software that controls them.
            </p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div className='flex'>
                <div>
                  <div className='text-[40px] font-tertiary text-gradient mb-2'>
                    {inView ? <CountUp start={0} end={3} duration={3}/> : null}
                  </div>
                  <div className='font-primary text-sm tracking-[2px]'>Years of <br />
                    Experience
                  </div>
                </div>
              </div>
              <div className='flex'>
                <div>
                  <div className='text-[40px] font-tertiary text-gradient mb-2'>
                    {inView ? <CountUp start={0} end={500} duration={3} /> : null}
                    
                  </div>
                  <div className='font-primary text-sm tracking-[2px]'>Projects<br />
                    Completed
                  </div>
                </div>
              </div>
              <div className='flex'>
                <div>
                  <div className='text-[40px] font-tertiary text-gradient mb-2'>
                    {inView ? <CountUp start={0} end={500} duration={3} /> : null}
                    
                  </div>
                  <div className='font-primary text-sm tracking-[2px]'>Satisfied <br />
                    Clients
                  </div>
                </div>
              </div>
            </div> 
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Contact me</button>
              <a href='#' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
