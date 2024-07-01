import React, {useEffect, useState} from 'react';
import { RiMenu5Fill, RiCloseCircleLine } from "react-icons/ri";
import {Link, animateScroll as scroll} from 'react-scroll';
import './css/header.css'

//flex-grow flex justify-center
const Header = () => {
  const [activeSection,setActiveSection] = useState('home')
  const [nav, setNav] = useState(true)

    const handleNav = () => {
      setNav(!nav)
    }

  const handleScroll = () => {
    const homeHeight = document.getElementById('home').offsetHeight - 500;
    const aboutHeight = document.getElementById('about').offsetHeight ;
    const projectsHeight = document.getElementById('projects').offsetHeight;

    const scrollPosition = window.scrollY;

    if (scrollPosition < homeHeight){
      setActiveSection('home');
    } else if (scrollPosition < homeHeight + aboutHeight){
      setActiveSection('about');
    } else if (scrollPosition < homeHeight + aboutHeight + projectsHeight){
      setActiveSection('projects') 
    } else {
      setActiveSection ('contact')
    }
  };
   useEffect(() => {
    window.addEventListener('scroll',handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
   }, []);

  return (
    <nav className='fixed top-0 w-full h-20 bg-[#2c3436] z-10'>
      <div className='flex justify-between items-center px-4'>
        <h1 className='font-bold text-7xl text-white'>Portfolio<span className='text-[#CFFF04]'>.</span></h1>
        <div className='flex justify-center'>          
            <ul className='hidden lg:flex space-x-8 translate-y-1'>
              {/*Navbar elements*/}
              <button className='px-4 py-4 hover:scale-110'>
                <Link to="home" spy={true} smooth={true} duration={500}
                className={`text-white text-xl underline-link ${activeSection === 'home' ? 'underline-active' : ''}`}>
                  Home<span className='text-[#CFFF04]'>.</span></Link>
              </button>

              <button className='py-2 px-4 hover:scale-110'>
                <Link to="about" spy={true} smooth={true} duration={500}
                className={`text-white text-xl underline-link ${activeSection === 'about' ? 'underline-active' : ''}`}>
                  About<span className='text-[#CFFF04]'>.</span></Link>
              </button>

              <button className='px-4 py-2 hover:scale-110'>
                <Link to="projects" spy={true} smooth={true} duration={500} 
                className={`text-white text-xl underline-link ${activeSection === 'projects' ? 'underline-active' : ''}`}>
                  Projects<span className='text-[#CFFF04]'>.</span></Link>
              </button>

              <button className='px-4 py-2 hover:scale-110'>
                <Link to="contact" spy={true} smooth={true} duration={500} 
                className ={`text-white text-xl underline-link ${activeSection === 'contact' ? 'underline-active' : ''}`}>
                  Contact<span className='text-[#CFFF04]'>.</span></Link>
              </button>
            </ul>
          </div>

            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <RiCloseCircleLine size={40} color='#2c5c4f'/> : <RiMenu5Fill size={40} color='#2c5c4f' />}     
            </div>

            {/*Mobile navbar elements*/}
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-black bg-red-200 ease-in-out duration-500' :'fixed left-[-100%]'}>
                <h1 className=''>Grover Soans.</h1>
                <ul className=''>
                    <li className=''>Home.</li>
                    <li className=''>About.</li>
                    <li className=''>Projects.</li>
                    <li className=''>Contact.</li>
                </ul>
            </div>
          </div>

    </nav>
  )
}

export default Header