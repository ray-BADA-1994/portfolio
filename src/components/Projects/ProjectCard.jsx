import React from "react";
import { v4 as uuidv4 } from "uuid";

const ProjectCard = ({datum}) => {
  return (
    <div className="border-2 border-black w-full p-2">
      {/* card-content */}
      <div className="space-y-2">
        {/* project name */}
        <p className="name font-medium text-2xl text-black border-b pb-2">{datum.name}</p>
        {/* project description */}
        <p className="description font-medium text-base text-[rgba(0,0,0,0.5] border-b pb-2">{datum.description}</p>
        {/* tech stack */}
        <div className="tech pb-2 border-b stack w-full p-2 flex flex-wrap justify-start items-center gap-2 border-black font-mono py-4 text-sm text-black capitalize ">
          {datum.stack.map((technology) => (
            <span
              key={uuidv4()}
              className="text-sm font-light cursor-pointer hover:border-[rgba(0,0,0,0.5)] transition-all duration-300 ease-in-out p-1 rounded-lg border border-[rgba(0,0,0,0.2)] text-black"
            >
              {technology}
            </span>
          ))}
        </div>
        <div className="flex flex-col items-start justify-center gap-2 pl-2 border-black font-mono py-4 text-sm text-black capitalize ">
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
    </div>
  );
};

export default ProjectCard;
