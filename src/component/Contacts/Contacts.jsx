import React from 'react'
import { IoIosSend } from "react-icons/io";
import ContactRight from "../../assets/images/contact.gif"
const Contacts = () => {
  return (
    <div className='my-16 lg:px-2 md:px-4 sm:px-5 px-5'>
        <div>
            <h2 className='relative text-center before:w-6 before:h-6 before:bg-[#f3c623] before:z-50 before:absolute before:bottom-[-12px] before:rounded-full before:shadow-2xl before:ring-inset before:ring-[#0a182e] before:ring-8 lg:before:left-[49%] md:before:left-[50%] sm:before:left-[50%] before:left-[45%] after:w-[250px] after:h-[2px] after:bg-white after:absolute after:bottom-0 lg:after:left-[42%] md:after:left-[34%] sm:after:left-[32%] after:left-[10%] font-Titillium Web text-[#f3c623] pb-6 font-medium text-3xl'>
                CONTACT <span className=' text-white '>ME</span> 
            </h2>
            <p className='font-normal font-Montserrat text-[#e6f1ff] text-center my-10 lg:text-2xl md:text-xl sm:text-lg text-lg'>Have a question or want to work together? I'd really love to hear from your feedback.</p>
        </div>
        <div className='my-20 flex justify-between items-center'>
            <div className='py-5 rounded-md px-4 bg-[#172A45] border border-[#1f498a] shadow-[#1f498a] shadow-md lg:w-1/2 md:w-full sm:w-full w-full'>
                <h3 className='text-center text-2xl text-white font-semibold'>GET IN TOUCH</h3>
                <div className='py-7'>
                    <form>
                        <input className='w-full outline-[#1e00ca] outline-none mb-6 rounded-md py-3 text-[16px] px-4 font-Montserrat capitalize font-medium' placeholder='Your Name' type="text" />
                        <input className='w-full outline-[#1e00ca] outline-none mb-6 rounded-md py-3 text-[16px] px-4 font-Montserrat capitalize font-medium' placeholder='Your Email' type="email" />
                        <textarea className='py-3 px-4 w-full rounded-md mb-6 outline-[#1e00ca] outline-none font-Montserrat capitalize font-medium' placeholder='Your Message'></textarea>
                        <button className='text-white relative py-3 border border-[#1f498a] hover:shadow-md hover:shadow-[#1f498a] rounded transition-all duration-500 px-6 w-full text-center font-Montserrat capitalize font-bold bg-[#0a182e]' > 
                            <IoIosSend className=' text-white absolute left-0 right-28 top-3 text-xl m-auto'/>Send Me
                        </button>
                    </form>
                </div>
            </div>
            <div className='lg:block md:hidden sm:hidden hidden'>
                <img src={ContactRight} className='w-[500px]' alt="Contact-Us" srcset="" />
            </div>
        </div>
    </div>
  )
}

export default Contacts
