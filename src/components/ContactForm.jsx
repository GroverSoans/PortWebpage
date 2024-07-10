import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si'

import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';




const ContactForm = () => {
    const form = useRef();
    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState({
      user_name: '',
      user_email: '',
      message: ''
    });

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_6u7n7yn', 'template_v08yo2n', form.current, {
          publicKey: 'kco68uhOSTnRvoDDz',
        })
        .then(
          () => {
            setStatus('Message has been sent successfully!');
            setFormData({
              user_name: '',
              user_email: '',
              message: ''
            });
          },
          (error) => {
            setStatus('Failed to send message. Please try again.');
            console.log('FAILED...', error.text);
          },
        );
    };

    useEffect(() => {
        if (status) {
          const timer = setTimeout(() => {
            setStatus('');
          }, 3000);
    
          return () => clearTimeout(timer);
        }
      }, [status]);
    



  return (
    <div className="h-screen w-screen flex bg-gray-100">
      {/* Left third with rotated text and social media icons */}
      <div className="w-1/3 items-center justify-center bg-blue-200 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-40 -rotate-90 w-full flex justify-center font-bold text-[250px] text-nowrap">
            Socials 
        </div>
        <div className='absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center'>
            <a className='ml-4 mb-4 p-1 border-4 border-white bg-white rounded-full ' href='https://github.com/GroverSoans' target="_blank" rel="noopener noreferrer">
                <FaGithub className='text-3xl ' href='https://github.com/GroverSoans' target="_blank" rel="noopener noreferrer"/>
            </a>
            <a className='ml-4 mb-4 p-1 border-4 border-white bg-white rounded-full'  href='https://www.linkedin.com/in/groversoans/' target="_blank" rel="noopener noreferrer">
                <FaLinkedin className=' text-3xl'/>
            </a>
            <a className='ml-4 mb-4 p-1 border-4 border-white bg-white rounded-full'  href='mailto:groverpsoans@gmail.com'>
                <SiGmail className='text-3xl'/>
            </a>
        </div>
      </div>

      {/* Vertical line */}
      <div className="w-1 flex items-center">
        <div className="h-full  border-2 border-gray-400"></div>
      </div>

      {/* Right two-thirds with contact form */}
      <div className="w-2/3 flex items-center justify-center overflow-hidden relative">
        {/* Background text */}
        <div className="absolute translate-y-16 bottom-0 left-0 font-bold text-[350px]">
          Contact
        </div>


        <div className="absolute w-11/12 top-0 mt-40 p-8 bg-white shadow-md rounded-lg  z-5 ">
          <h1 className="text-3xl font-bold mb-4">Send Me An Email</h1>
          {/* Your contact form fields go here */}
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="user_name"
                type="text"
                placeholder="Your name"
                value={formData.user_name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="user_email"
                type="email"
                placeholder="Your email"
                value={formData.user_email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                value="Send"
              >
                Send
              </button>
            </div>
          </form>
          {/* Notification */}
          {status && <div className="mt-4 p-2 text-center text-white bg-blue-500 rounded">{status}</div>}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
