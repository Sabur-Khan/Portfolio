import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
const BannerTitle = () => {
  return (
    <div>
      <div className='lg:px-0 md:px-0 sm:px-5 px-5'>
            <p className=' font-Montserrat font-medium text-2xl text-[#E9AF1D]'>Hi, I'm</p>
            <h3 className=' font-Montserrat font-bold lg:text-6xl md:text-[50px] sm:text-[50px] text-[40px] text-[#e6f1ff] my-2'>Sabur Khan</h3>

            {/* typewriting animation effeact */}
            <h1 style={{ fontWeight: 'bold', fontSize: '28px' }}>
              <span style={{ color: '#E9AF1D', fontWeight: 'normal'  }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={['MERN Stack Developer', 'Front End Developer', 'React Debeloper']}
                  loop={5}
                  cursor
                  cursorStyle='|'
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>

            
          </div>
    </div>
  )
}

export default BannerTitle
