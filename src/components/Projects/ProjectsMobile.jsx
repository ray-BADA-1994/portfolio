import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { data } from "../../Data/ProjectData";
import ProjectDetails from "./ProjectDetails";
import { GrContactInfo } from "react-icons/gr";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectMobile = ({ toggle }) => {
  
  return (
    <div className="bg-white min-h-[100vh] py-10 md:py-20 w-full flex justify-center items-center">
      <div className="space-y-10 mx-2 md:mx-5 xl:mx-0">
        <div onClick={() => toggle()} className="flex justify-between items-center">
          <motion.span
            
            whileTap={{ scale: 0.9 }}
            className="info-icon lg:hidden text-3xl h-[50px] w-[50px] flex justify-center items-center rounded-full border"
          >
            <GrContactInfo />
          </motion.span>
          <Link to={'/about'} className="text-sm active:scale-95 font-medium border p-1 text-black w-fit xl:hidden ">About me</Link>

        </div>
        <h1 className="text-3xl font-semibold font-mono text-black">
          Projects
        </h1>
       
    
        {/* PROJECTS */}
        <div className="space-y-5 md:space-y-0 md:grid md:grid-cols-2 grid-rows-[1fr_500px] gap-10">
          {/* FIRST PROJECT */}
          {data.map((datum) => (
            <ProjectCard datum={datum} key={uuidv4()} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectMobile;