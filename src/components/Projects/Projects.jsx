import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { data } from "../../Data/ProjectData";
import ProjectDetails from "./ProjectDetails";
import { GrContactInfo } from "react-icons/gr";
import { motion } from "framer-motion";

const Projects = ({ toggle }) => {
  
  return (
    <div id="projects" className="bg-white h-[100vh] py-20 w-full flex justify-center items-center">
      <div className="space-y-10 md:mx-5 lg:mx-0">
        <div onClick={() => toggle()}>
          <motion.span
            
            whileTap={{ scale: 0.9 }}
            className="info-icon lg:hidden text-3xl h-[50px] w-[50px] flex justify-center items-center rounded-full border"
          >
            <GrContactInfo />
          </motion.span>
        </div>
        <h1 className="text-3xl font-semibold font-mono text-black">
          Projects
        </h1>
        {/* TABLE HEADERS */}
        <header className="border  border-black h-fit md:grid md:grid-cols-4  lg:flex lg:justify-center lg:items-center">
          <span className="lg:w-[300px] text-center border-black font-mono py-4 text-base text-black capitalize border-r ">
            Name
          </span>
          <span className="lg:w-[300px] text-center border-black font-mono py-4 text-base text-black capitalize border-r ">
            Description
          </span>
          <span className="lg:w-[300px] text-center border-black font-mono py-4 text-base text-black capitalize border-r ">
            Tech Stack
          </span>
          <span className="lg:w-[300px] text-center border-black font-mono py-4 text-base text-black capitalize">
            Links
          </span>
        </header>
        {/* PROJECTS */}
        <div className="space-y-5">
          {/* FIRST PROJECT */}
          {data.map((datum) => (
            <ProjectDetails datum={datum} key={uuidv4()} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
