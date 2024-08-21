import React from "react";
import Container from "../../component/Container/Container";
import leftSideImage from '../../assets/images/banner-profile.png'
const About = () => {
  return (
    <div className='my-14 lg:px-2 md:px-4 sm:px-5 px-5'>
      <Container>
        <div className=" text-center ">
          <h2 className="relative before:w-6 before:h-6 before:bg-[#f3c623] before:z-50 before:absolute before:bottom-[-12px] before:rounded-full before:shadow-2xl before:ring-inset before:ring-[#0a182e] before:ring-8 lg:before:left-[49%] md:before:left-[50%] sm:before:left-[50%] before:left-[45%] after:w-[250px] after:h-[2px] after:bg-white after:absolute after:bottom-0 lg:after:left-[42%] md:after:left-[34%] sm:after:left-[32%] after:left-[16%] font-Montserrat text-white pb-6 font-medium text-3xl">
            ABOUT <span className=" text-[#e9af1d]">ME</span>
          </h2>
        </div>
        <div className=" grid lg:grid-cols-2 md:grid-cols-1 gap-16 mt-16">
          <div>
            <div>
              <h2 className=" font-Montserrat text-4xl text-white font-semibold">I'm Sabur Khan</h2>
              <p className=" font-Montserrat text-base text-white font-normal mt-10 text-justify">I am a highly passionate, enthusiastic, hardworking and dedicated learner. Self-motivated IT professional with deep knowledge and proficiency in JavaScript, HTML, CSS, and mobile responsive website development, as well as highly potent skills and ability in encoding virus-free and efficient code. I have a strong passion for the creativity and discipline that goes into front-end development. Keeping in mind scalability and clean code that is maintainable and readable.</p>
              <div className='w-[250px] lg:block md:hidden sm:hidden hidden my-8 h-[250px] outline-4 outline outline-white rounded-full overflow-hidden'>
                <img src={leftSideImage} alt="bannerlogo" />
              </div>

            </div>
            <div className="lg:w-[40%] md:w-[80%] sm:w-[40%] w-500px flex justify-between mt-10">

              <button className=" bg-[#e9af1d] py-3 px-5 border-2 border-[#e9af1d] font-mono font-bold rounded-md hover:text-white hover:bg-transparent text-[18px] transition-all duration-500">Contact Me</button>
              <button className=" bg-[#e9af1d] py-3 px-5 border-2 border-[#e9af1d] font-mono font-bold rounded-md hover:text-white hover:bg-transparent text-[18px] transition-all duration-500">My Blog</button>
            </div>
          </div>
          <div>
            <h2 className="relative text-center before:w-6 before:h-6 before:bg-[#f3c623] before:z-50 before:absolute before:bottom-[-12px] before:rounded-full before:shadow-2xl before:ring-inset before:ring-[#0a182e] before:ring-8 lg:before:left-[49%] md:before:left-[50%] sm:before:left-[50%] before:left-[45%] after:w-[250px] after:h-[2px] after:bg-white after:absolute after:bottom-0 lg:after:left-[44%] lg:after:w-[100px] md:after:left-[30%] sm:after:left-[32%] after:left-[16%] font-Montserrat text-white pb-6 font-medium text-3xl">
              My <span className=" text-[#e9af1d]">Skills</span>
            </h2>
            <div>
              <h3 className=" relative after:absolute after:w-5 after:h-1 text-2xl font-medium font-Montserrat after:bg-[#e9af1d] after:left-0 after:bottom-0 pb-3 text-white ">Comfortable</h3>

              <ul className="flex justify-between items-center flex-wrap mt-6 gap-3">
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >HTML</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >CSS</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >Javascript</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >ES6</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >React JS</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >Bootstrap</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >Material-UI</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >SASS</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >Ant Design</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >TypeScript</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >Next.js</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >Chakra-UI</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >Tailwindcss</li>
              </ul>
            </div>

            <div className="mt-20">
              <h3 className=" relative after:absolute after:w-5 after:h-1 text-2xl font-medium font-Montserrat after:bg-[#e9af1d] after:left-0 after:bottom-0 pb-3 text-white ">Familiar</h3>

              <ul className="flex justify-between items-center flex-wrap mt-6 gap-3">
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >MongoDB</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >Express.js</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >Node.js</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >GraphQL</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >Redux</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >Data Structure</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >Java</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >OOP</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >Algorithm</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >TypeScript</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >Next.js</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >Chakra-UI</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >Tailwindcss</li>
              </ul>
            </div>

            <div className="mt-20">
              <h3 className=" relative after:absolute after:w-5 after:h-1 text-2xl font-medium font-Montserrat after:bg-[#e9af1d] after:left-0 after:bottom-0 pb-3 text-white ">Tools & Platform</h3>

              <ul className="flex justify-between items-center flex-wrap mt-6 gap-3">
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >Visual Studio Code</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >Git </li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >GitHub</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >Bitbucket</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >Npm</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >Yarn</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >Firebase</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >Netlify</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >Heroku</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >Vercel</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >Jira</li>
                <li className="p-3 bg-[#e9af1d] rounded-md font-Montserrat text-base font-medium border border-[#e9af1d] hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer" >Chrome Dev Tool</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;