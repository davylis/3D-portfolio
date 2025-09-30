import React, { useRef, useState } from 'react';
import { motion } from "motion/react"
import { textVariant } from '../utils/motion';
import { styles } from '../styles';
import emailjs from '@emailjs/browser';
import SectionWrapper from '../hoc/SectionWrapper'
import BluePlanet from './canvas/BluePlanet';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";

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

    emailjs.send(
  'service_lekvpz8',
  'template_fuphrvw', 
  {
    from_name: form.name,
    from_email: form.email,
    message: form.message,
  },
  'GUCqWaiIOcTWzZed6'
).then(() => {
  // Auto reply
  emailjs.send(
    'service_lekvpz8',
    'template_7ojnd3k',
    {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    },
    'GUCqWaiIOcTWzZed6'
  )
}).then(() => {
  setLoading(false);
  alert("Message sent");
}).catch((error) => {
  setLoading(false);
  console.error(error);
  alert("Something went wrong.");
});


  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="xl:mt-12">
          <h2 className={`${styles.sectionHeadText} section-title text-center gradient`}
          style={{ marginBottom: '60px', marginTop: '100px'}}>
            Contact
          </h2>
        </div>

        <div className="xl:mt-12 flex flex-col xl:flex-row gap-6 justify-center items-center w-full max-w-[1200px] mx-auto">
          
<motion.div 
        variants={textVariant()} 
        className="flex-shrink-0 xl:w-6/12 h-[400px] xl:h-[600px] justify-center items-center">
      
       <p className={`${styles.sectionSubText} hidden sm:block text-center mb-4`}>Move me!</p>
      <BluePlanet /> 
      </motion.div>
       <div className="flex-shrink-0 xl:w-4/12 items-center justify-center">
          <form ref={formRef}
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col gap-8 max-w-lg w-full"
          >
            <label className="flex flex-col">
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
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
                placeholder="What's your email?"
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
            <div className="flex justify-center">
            <button
              type="submit"
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              {loading ? 'Sending...' : 'Send'}

            </button>
            </div>
          </form>
          </div>
        </div>
      </motion.div>

      <motion.div>
        <div className="flex justify-center gap-6 mt-16">
  {/* LinkedIn */}
  <a
    href="https://linkedin.com/in/davylis"
    target="_blank"
    rel="noopener noreferrer"
    className="w-16 h-16 flex items-center justify-center rounded-full bg-tertiary shadow-md shadow-primary hover:scale-110 transition-transform"
  >
    <FaLinkedin className='h-9 w-9'/>
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/davylis"
    target="_blank"
    rel="noopener noreferrer"
    className="w-16 h-16 flex items-center justify-center rounded-full bg-tertiary shadow-md shadow-primary hover:scale-110 transition-transform"
  >
    <FaGithub className='h-9 w-9'/>
  </a>
  <a
   href="/cv/my-cv.pdf"
    download="My_CV.pdf"
    className="w-16 h-16 flex items-center justify-center rounded-full bg-tertiary shadow-md shadow-primary hover:scale-110 transition-transform"
  >
    <FaFilePdf className="w-6 h-6" />
  </a>
</div>

      </motion.div>

<div className="w-full py-4 text-center text-sm text-gray-400 mt-12"> © {new Date().getFullYear()} Liisa Davydov </div>
      
    </>
  );
};

export default SectionWrapper(Contact, "contact");
