import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";


const SocialLink = () => {
       
  return (
    <div>
      {/* Social Link */}
        <div className='my-10 lg:w-[200px] md:w-[150px] w-[150px] lg:px-0 md:px-0 sm:px-5 px-5'>
            <ul className='flex justify-between items-center gap-4 '>
                <li className=' text-3xl p-2 bg-white rounded-full cursor-pointer hover:bg-black hover:text-white hover:shadow-lg hover:shadow-white/20 transition duration-700 hover:translate-y-2'>
                    <a href="https://github.com/Sabur-Khan">
                        <FaGithub />
                    </a>
                </li>
                <li className=' text-3xl p-2 bg-white rounded-full cursor-pointer hover:bg-[#0077b5] hover:text-white hover:shadow-lg hover:shadow-white/20 transition duration-700 hover:-translate-y-3'>
                    <a href="https://www.linkedin.com/in/md-sabur-khan-a041ab280/">
                        <FaLinkedin />
                    </a>
                </li>
                <li className=' text-3xl p-2 bg-white rounded-full cursor-pointer hover:bg-[#0056b3] hover:text-white hover:shadow-lg hover:shadow-white/20 transition duration-700 hover:translate-y-2'>
                    <a href="https://web.facebook.com/Sk2441139?_rdc=1&_rdr">
                        <FaFacebookSquare  />
                    </a>
                </li>
                <li className=' text-3xl p-2 bg-white rounded-full cursor-pointer hover:bg-[#00acee] hover:text-white hover:shadow-lg hover:shadow-white/20 transition duration-700 hover:-translate-y-3'>
                    <a href="https://twitter.com/SoburKh75612427">
                        <FaTwitter />
                    </a>
                </li>
            </ul>

        </div>
        
    </div>
  )
}

export default SocialLink
