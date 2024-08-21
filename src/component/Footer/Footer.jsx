import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import Container from '../Container/Container'

const Footer = () => {
  return (
    <div className='bg-[#001D48] py-6 lg:px-0 md:px-0 sm:px-5 px-5'>

      {/* <div className='container mx-auto mt-2 w-full text-white '>
        
      </div> */}
      <Container>
        <div className='lg:my-10 md:mb-4 sm:mb-4 mb-3 lg:w-[200px] md:w-[150px] sm:w-[150px] mx-auto'>
          <ul className='flex justify-between items-center gap-2'>
            <li className=' text-3xl p-2 bg-white rounded-full cursor-pointer hover:bg-black hover:text-white hover:shadow-lg hover:shadow-white/20 transition duration-700 hover:translate-y-2'>
              <a href="https://github.com/Sabur-Khan">
                <FaGithub />
              </a>
            </li>
            <li className=' text-3xl p-2 bg-white rounded-full cursor-pointer hover:bg-[#0077b5] hover:text-white hover:shadow-lg hover:shadow-white/20 transition duration-700 hover:-translate-y-3'>
              <a href="https://www.linkedin.com/in/sobur-khan-028a69257/">
                <FaLinkedin />
              </a>
            </li>
            <li className=' text-3xl p-2 bg-white rounded-full cursor-pointer hover:bg-[#0056b3] hover:text-white hover:shadow-lg hover:shadow-white/20 transition duration-700 hover:translate-y-2'>
              <a href="https://web.facebook.com/Sk2441139?_rdc=1&_rdr">
                <FaFacebookSquare  />
              </a>
            </li>
            <li className=' text-3xl p-2 bg-white rounded-full cursor-pointer hover:bg-[#00acee] hover:text-white hover:shadow-lg hover:shadow-white/20 transition duration-700 hover:-translate-y-3'>
              <a href="">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
        <p className='text-center text-white lg:text-xl md:text-lg sm:text-base text-sm font-Montserrat font-semibold'>Designed & Built by <span className='text-[#e8ae1c] font-Montserrat text-xl font-bold'>Sabur Khan</span>  || All Rights Reserved</p>
      </Container>
    </div>
  )
}

export default Footer