import React, { useRef, useState } from 'react';
import { motion } from "motion/react"
import { textVariant } from '../utils/motion';
import { styles } from '../styles';
import emailjs from '@emailjs/browser';
import SectionWrapper from '../hoc/SectionWrapper'
import BluePlanet from './canvas/BluePlanet';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
          <h2 className={`${styles.sectionHeadText} section-title text-center`}>
            Contact
          </h2>
        </div>

        <div className="xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden">
<motion.div 
        variants={textVariant()} 
        className='xl:flex-1 md:h-[550] md:h-[550px] h-[150px]' 
      > 
       <p className={styles.sectionSubText}>Move me!</p>
      <BluePlanet /> 
      </motion.div>
       
          <form ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label className="flex flex-col">
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className="flex flex-col">
              <span className='text-white font-medium mb-4'>Your Email</span>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your good email?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className="flex flex-col">
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <button
              type="submit"
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              {loading ? 'Sending...' : 'Send'}

            </button>
          </form>
        </div>
      </motion.div>

      
    </>
  );
};

export default SectionWrapper(Contact, "contact");
