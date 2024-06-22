import React, {useState} from 'react';
import { RiMenu5Fill, RiCloseCircleLine } from "react-icons/ri";
import {Link} from 'react-scroll';

const Header = () => {
  const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <nav className='fixed top-0 w-full h-20 bg-[#2c3436] z-10'>
      <div className='flex h-20  items-center justify-between mx-auto max-w-[1440px] text-white'>
            <h1 className='w-full px-4 text-5xl font-body text-primary'>Portfolio.</h1>
            <ul className='hidden lg:flex'>
                <button className='navbtn'>
                    <Link to='home' spy={true} offset={0} duration={500}>Home.</Link>
                </button>
                <button className='navbtn'>
                    <Link to="about" spy={true} offset={0} duration={500}>About.</Link>
                </button>
                <button className='navbtn'>
                    <Link to="projects" spy={true} offset={0} duration={500}>Projects.</Link>
                </button>
                <button className='navbtn'>
                    <Link to="contact" spy={true} offset={0} duration={500}>Contact.</Link>
                </button>

            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <RiCloseCircleLine size={40} color='#2c5c4f'/> : <RiMenu5Fill size={40} color='#2c5c4f' />}     
            </div>
          </div>

    </nav>
  )
}

export default Header