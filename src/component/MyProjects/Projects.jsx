import React from "react";
import projectData from "../../projectData/projectData";
import ProjectCard from "../ProjectCard/ProjectCard";
const Projects = () => {
  console.log(projectData[0].all);
  return (
    <div className=" my-[100px]">
      <div className=" text-center mb-16">
        <h2 className="relative before:w-6 before:h-6 before:bg-[#f3c623] before:z-50 before:absolute before:bottom-[-12px] before:rounded-full before:shadow-2xl before:ring-inset before:ring-[#0a182e] before:ring-8 lg:before:left-[49%] md:before:left-[50%] sm:before:left-[50%] before:left-[45%] after:w-[250px] after:h-[2px] after:bg-white after:absolute after:bottom-0 lg:after:left-[42%] md:after:left-[34%] sm:after:left-[32%] after:left-[16%] font-Montserrat text-white pb-6 font-medium text-3xl">
          MY <span className=" text-[#e9af1d]">PROJECTS</span>
        </h2>
      </div>

      {/* Project Card */}
      <div className="lg:px-2 md:px-4 sm:px-5 px-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {
          projectData.map(projectData =>(
            <ProjectCard
              key={projectData.id}
              images={projectData.images}
              title={projectData.title}
              cardInfo={projectData.cardInfo}
              tagOne={projectData.tagOne}
              tagTwo={projectData.tagTwo}
              tagThree={projectData.tagThree}
              tagFour={projectData.tagFour}
              tagFive={projectData.tagFive}
              tagSix={projectData.tagSix}
              tagSeven={projectData.tagSeven}
              tagEight={projectData.tagEight}
              tagNine={projectData.tagNine}
              tagTen={projectData.tagTen}
              tagEleven={projectData.tagEleven}
              linkOne={projectData.linkOne}
              linkTwo={projectData.linkTwo}
            />
          ))
        }
      </div>

    </div>
  );
};

export default Projects;
