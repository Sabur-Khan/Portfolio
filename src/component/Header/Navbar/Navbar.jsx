import React, { useState } from 'react'
import logo from '../../../assets/images/logo.png';
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoCloseSharp } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { BsInfoSquareFill } from "react-icons/bs";
import { RiProjectorFill } from "react-icons/ri";
import { SiBlogger } from "react-icons/si";
import { MdContactPage } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import mycv from '../../../assets/images/CV-Sabur-Khan.pdf';
import Container from '../../Container/Container';
import SocialLink from '../../SocialLink/SocialLink';

const Navbar = () => {
  const [sidNav, setSidNav] = useState(true)

  return (
    
    <div className=' bg-[#001D48] w-full h-[90px]  py-3 lg:px-0 md:px-3 sm:px-2 px-4 '>
      <Container>
        <div>

          {/* logo for small device and medium divice */}
          <div className='lg:hidden md:block block '>

            <div className={`lg:hidden md:block sm:block block bg-[#001D48] transition-all duration-700 lg:w-0 md:w-full sm:w-full w-full fixed z-[3000] left-0 right-0 top-0 px-5 py-3 ${sidNav? 'sm:left-[-1000px] left-[-500px]' : 'left-[0px]'}`}>
              <div className={`flex justify-between items-center mb-10 border-b border-b-white/15 pb-4 ${sidNav? 'left-[0px]' : 'left-[-400px]'}`}>
                <div>
                  <Link to='/'>
                    <img className=' w-[150px]' src={logo} alt="logo"/>
                  </Link>
                </div>

                <div className='px-1 py-1 border cursor-pointer' onClick={()=>setSidNav(!sidNav)}>
                    
                  {sidNav ? <></> : <IoCloseSharp className='text-white text-[25px]'/>}
                </div>
              </div>

              <div className='my-5'>

                <div class="text-sky-600 mb-5 pb-2 border-b">
                  <Link className='flex items-center text-white lg:text-base md:text-sm text-sm font-medium font-Montserrat' to='/Home'>
                    <IoHome className='mr-5 text-xl'/> Home
                  </Link>
                  
                </div>
            
                <div class="text-sky-600 mb-5 pb-2 border-b">
                  <Link className=' flex items-center text-white lg:text-base md:text-sm text-sm font-medium font-Montserrat' to='/About'>
                    <BsInfoSquareFill className='mr-5 text-xl' /> About
                  </Link>
                </div>

                <div class="text-sky-600 mb-5 pb-2 border-b">
                  <Link className='flex items-center text-white lg:text-base md:text-sm text-sm font-medium font-Montserrat' to='/Projects'>
                    <RiProjectorFill className='mr-5 text-xl'/> Project
                  </Link>
                </div>

                <div class="text-sky-600 mb-5 pb-2 border-b">
                  <Link className='flex items-center text-white lg:text-base md:text-sm text-sm font-medium font-Montserrat' to='/Blog'>
                    <SiBlogger className='mr-5 text-xl'/> Blog
                  </Link>
                  <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] bg-sky-600"></span>
                </div>

                <div class="text-sky-600 mb-5 pb-2 border-b">
                  <Link className='flex items-center text-white lg:text-base md:text-sm text-sm font-medium font-Montserrat' to='/Contact'>
                    <MdContactPage className='mr-5 text-xl'/> Contact
                  </Link>
                </div>

              </div>
                <div className='w-full mt-16'>
                  <SocialLink/>
                  <p className='text-sm text-white font-Montserrat font-medium pb-4'> © Sabur Khan 2024. All Rights Reseverd</p>
                </div>
            </div>


            <div className=' flex justify-between items-center left-0 right-0 fixed bg-[#001D48] top-0 py-2 px-3 z-[2000]'>
              <Link to='/'>
                <img className=' w-[200px]' src={logo} alt="logo"/>
              </Link>
              <button onClick={()=>setSidNav(!sidNav)} className='text-white text-[25px] cursor-pointer'>
                {sidNav ? <FaBarsStaggered /> : <></>}
              </button>
            </div>

            

          </div>

          {/* Large screen navbar */}
          <nav className='justify-between items-center lg:flex md:hidden hidden'>

            {/* logo section */}
            <div >
              <Link to='/'>
                <img className=' w-[200px]' src={logo} alt="logo"/>
              </Link>
            </div>

            {/* Menu section */}
            <div className=' w-[30%] flex justify-between items-center'>
              <div class="group text-sky-600 transition duration-300">
                <Link className=' after:content["w-3 h-4"] text-white lg:text-base md:text-sm text-sm font-medium font-Montserrat' to='/Home'>
                  Home
                </Link>
                <span class=" block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] bg-sky-600 mb-1"></span>
              </div>
              
              <div class="group text-sky-600 transition duration-300">
                <Link className=' text-white lg:text-base md:text-sm text-sm font-medium font-Montserrat' to='/About'>
                  About
                </Link>
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] bg-sky-600"></span>
              </div>

              <div class="group text-sky-600 transition duration-300">
                <Link className='text-white lg:text-base md:text-sm text-sm font-medium font-Montserrat' to='/Projects'>
                  Project
                </Link>
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] bg-sky-600"></span>
              </div>

              <div class="group text-sky-600 transition duration-300">
                <Link className='text-white lg:text-base md:text-sm text-sm font-medium font-Montserrat' to='/Blog'>
                  Blog
                </Link>
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] bg-sky-600"></span>
              </div>

              <div class="group text-sky-600 transition duration-300">
                <Link className='text-white lg:text-base md:text-sm text-sm font-medium font-Montserrat' to='/Contact'>
                  Contact
                </Link>
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] bg-sky-600"></span>
              </div>
            </div>

            {/* Button section */}
            <div className=''>
              <a className='flex hover:bg-[#DDA71F] hover:text-[#001D48] duration-700 px-[8px] py-[8px] text-white lg:text-base md:text-sm text-sm font-medium font-Montserrat border border-[#DDA71F] gap-3 justify-between items-center' href={mycv} download="CV-Sabur-Khan.pdf">Download Resume <FaDownload /></a>
            </div>

          </nav>

          {/* Medium scree navbar */}


        </div>
      </Container>
    </div>
  )
}

export default Navbar