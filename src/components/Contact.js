
import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

 

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <div className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2'>
                Get in touch
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's work <br /> together!
              </h2>
            </div>
          </div>
          <form  className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder-text-white focus:border-accent transition-all'
              type='text'
              placeholder='Your name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder-text-white focus:border-accent transition-all'
              type='text'
              placeholder='Your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Set email state
            />
            <textarea 
              className='bg-transparent border-b py-12 outline-none w-full placeholder-text-white focus:border-accent transition-all resize-none mb-12'
              placeholder='Your message'
              value={message}
              onChange={(e) => setMessage(e.target.value)} 
            />
            <button className='btn btn-lg' type="submit"> 
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

