import React ,{ useRef } from 'react';
import emailjs from '@emailjs/browser'
// motion
import {motion} from 'framer-motion'
// fadein
import { fadeIn } from '../variants';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9rss5t3', 'template_ec6w7ru', form.current, 'hzPa0phKO2_RN4obY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return <section className='py-16 lg:section' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1 flex justify-start items-center'
        >
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'> Get in touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Lets work <br/> together</h2>
          </div>
        </motion.div>
        {/* form */}
        <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
        className='flex-1 border text-black border-black-500 rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
        ref={form} onSubmit={sendEmail}> 
        <input 
        className='bg-transparent border-b py-3 outline-none w-full placeholder:text-black focus:border-accent transition-all'
        type='text'
        name='from_name'
        placeholder='Your Name'
        />
         <input 
        className='bg-transparent border-b py-3 outline-none w-full placeholder:text-black focus:border-accent transition-all'
        type='text'
        name='from_email'
        placeholder='Your Email'
        />
         <textarea 
        className='bg-transparent border-b py-12 outline-none w-full placeholder:text-black focus:border-accent transition-all resize-none mb-12'
        type='text'
        name='message'
        placeholder='Your Message'
        ></textarea>
        <input type="submit" className='btn btn-lg'/>
        </motion.form>

      </div>
    </div>
  </section>;
};

export default Contact;
