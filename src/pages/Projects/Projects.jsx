import React from "react";
import Container from "../../component/Container/Container";
import MyProjects from "../../component/MyProjects/Projects";
const Projects = () => {
  return (
    <div>
      <Container>
        <div className=" my-[100px]">
          <div>
            <MyProjects/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
