import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const ProjectDetails = ({ datum }) => {
  return (
    <div className="border  border-black h-fit grid grid-cols-4">
      <span className="lg:w-[300px] text-center border-black font-mono py-4 text-sm text-black capitalize border-r ">
        {/* Movie App */}
        {datum.name}
      </span>
      <span className="lg:w-[300px] text-center border-black font-mono py-4 text-sm text-black capitalize border-r ">
        {/* Shows recent movies plus movies from different genres, and their
                trailers */}
        {datum.description}
      </span>
      <div className="lg:w-[300px] flex flex-wrap justify-center items-center gap-2 border-black font-mono py-4 text-sm text-black capitalize border-r ">
        {datum.stack.map((technology) => (
          <span
            key={uuidv4()}
            className="text-sm font-light cursor-pointer hover:border-[rgba(0,0,0,0.5)] transition-all duration-300 ease-in-out p-1 rounded-lg border border-[rgba(0,0,0,0.2)] text-black"
          >
            {technology}
          </span>
        ))}
        {/* <span className="text-sm font-light cursor-pointer hover:border-[rgba(0,0,0,0.5)] transition-all duration-300 ease-in-out p-1 rounded-lg border border-[rgba(0,0,0,0.2)] text-black">
                  Node js
                </span> */}
      </div>
      <div className="lg:w-[300px] flex flex-col items-start justify-center gap-2 pl-10 border-black font-mono py-4 text-sm text-black capitalize ">
        <a
          href={datum.links.github}
          className="github-link underline-offset-2 underline cursor-pointer"
        >
          github link
        </a>
        <a
          href={datum.links.website}
          className="actual-link underline-offset-2 underline cursor-pointer"
        >
          Website link
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
