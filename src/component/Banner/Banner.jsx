import React from "react";
import { Link } from 'react-router-dom';
import { FaDownload } from "react-icons/fa6";
import Container from "../Container/Container";
import CV from '../../assets/images/CV-Sabur-Khan.pdf'
import RightBanner from '../../assets/images/2517913.png'
import SocialLink from "../SocialLink/SocialLink";
import BannerTitle from "../BannerTitle/BannerTitle";

const Banner = () => {
  return (
    <div className="my-14">
      <Container>
        <div className="grid px-2 lg:grid-cols-2 gap-4 items-center">
          <div>
            <BannerTitle />
            <SocialLink />

            <p className="lg:px-0 md:px-0 sm:px-5 px-5 mt-3 first-letter:font-medium first-letter:text-[40px] text-[#e6f1ff] text-base w-full font-Montserrat font-normal text-justify">
              I am a highly passionate, enthusiastic, hardworking and dedicated
              learner. Self-motivated IT professional with deep knowledge and
              proficiency in JavaScript, HTML, CSS, and mobile responsive
              website development, as well as highly potent skills and ability
              in encoding virus-free and efficient code. I have a strong passion
              for the creativity and discipline that goes into front-end
              development. Keeping in mind scalability and clean code that is
              maintainable and readable.
            </p>
            <div className="lg:px-0 md:px-0 sm:px-5 px-5 flex gap-8 justify-start mt-8">
              <Link to="/About" className="text-black cursor-pointer hover:bg-[#001d48] hover:text-white hover:bg-transparent border border-[#e9af1d] transition duration-700 px-4 py-3 bg-[#e9af1d] rounded-sm text-base font-Montserrat font-medium" >
               
                About Me
              </Link>
              <a className="text-black cursor-pointer hover:bg-[#001d48] hover:text-white hover:bg-transparent border border-[#e9af1d] transition duration-700 px-4 py-3 bg-[#e9af1d] rounded-sm text-base font-Montserrat flex justify-between items-center gap-4 font-medium" href={CV} download="CV-Sabur-Khan.pdf" >
                Download Resume <FaDownload />
              </a>
            </div>
          </div>
          <div className="lg:block md:hidden hidden">
            <div className="">
              <img src={RightBanner} alt="bannerlogo" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
