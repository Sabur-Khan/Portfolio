import React from "react";

const ProjectCard = (props) => {
  console.log(props );
  return (
    <div>
        <div key={props.id} className="border group border-[#1f498a] h-full hover:shadow-md hover:shadow-[#1f498a] rounded transition-all duration-500 hover:-translate-y-2">
          <img className="text-white" src={props.images} alt="cardImg" />
          <div className="py-4 px-4 ">
            <h2 className="py-2 capitalize text-white font-Montserrat text-2xl font-medium ">
              {props.title}
            </h2>
            <div className="relative after:duration-500 after:transition-all after:w-4 after:absolute after:h-[4px] after:bg-[#f3c623] after:left-0 after:bottom-[-3px] hidden group-hover:block"></div>
            <p className="font-normal py-3 font-Montserrat text-white text-justify text-base my-4">
              {props.cardInfo}
            </p>
          </div>

          <div className="px-4">
            <ul className="flex flex-wrap justify-between gap-3">
                
              {
                props.tagOne && (<li className= "text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white duration-500 transition-all font-bold">
                {props.tagOne} 
                </li>)
              }
                
              {
                props.tagTwo && (<li className= "text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white duration-500 transition-all font-bold">
                  {props.tagTwo}
                </li>)
              }
                
              {props.tagThree && (<li className= "text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white duration-500 transition-all font-bold">
                {props.tagThree}
                </li>)
              }
                
              {
                props.tagFour && (<li className= "text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white duration-500 transition-all font-bold">
                {props.tagFour}
                </li>)
              }
                
              {props.tagFive && (<li className= "text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white duration-500 transition-all font-bold">
                {props.tagFive}
                </li>)
              }
                
              {props.tagSix && (<li className= "text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white duration-500 transition-all font-bold">
                {props.tagSix}              
                </li>)
              }
                
              {props.tagSeven && (<li className= "text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white duration-500 transition-all font-bold">
                {props.tagSeven}
                </li>)
              }
                
              {props.tagEight && (<li className= "text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white duration-500 transition-all font-bold">
                {props.tagEight}
                </li>)
              }
                
              {props.tagNine && (<li className= "text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white duration-500 transition-all font-bold">
                {props.tagNine}
                </li>)
              }
                
              {props.tagTen && (<li className= "text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white duration-500 transition-all font-bold">
                {props.tagTen}
                </li>)
              }
                
              {props.tagEleven && (<li className= "text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white duration-500 transition-all font-bold">
                {props.tagEleven}
                </li>)
              }
              
            </ul>
          </div>

          <div className="px-4 py-2 my-9">
            <ul className="flex justify-between items-center flex-wrap">
              <li>
                <a
                  className="text-white font-bold text-base px-7 py-3 hover:bg-[#f3c623] hover:text-black transition-all duration-500 bg-transparent border-[#f3c623] border-2 font-Montserrat"
                  href={props.linkOne}
                >
                  Live Link
                </a>
              </li>
              <li>
                <a
                  className="text-white font-bold text-base px-7 py-3 hover:bg-[#f3c623] hover:text-black transition-all duration-500 bg-transparent border-[#f3c623] border-2 font-Montserrat"
                  href={props.linkTwo}
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
};

export default ProjectCard;
