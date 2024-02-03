import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="h-fit md:h-screen w-screen bg-black flex justify-center md:items-center text-[rgba(255,255,255,0.5)] relative overflow-auto pt-5 pb-10 md:pb-0 ">
      <div className="flex flex-col justify-center w-[300px] mt-20y md:pt-0 md:w-[500px]">
        <Link to={'/'} className="text-sm text-[rgba(255,255,255,0.7)] about-link w-fit mb-10 md:hidden ">Home</Link>

         {/* EXPERIENCE */}
        <div className="grid grid-cols-[min(100px)_1fr] border-b border-gray-500">
          <p className="section-experience p-2 border-r border-gray-500  text-normal font-lighty w-fity text-[rgba(255,255,255,0.5)]">
            Experience
          </p>
          <div></div>
        </div>
        {/* EXPERIENCE LIST */}
        <div className="grid grid-cols-[min(100px)_1fr] border-b border-gray-500">
          <p className="section-experience p-2 border-r text-sm border-gray-500  text-normal font-light w-fity text-[rgba(255,255,255,0.5)]">
            2020-2021
          </p>
          <div className="px-2 py-2">
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                {" "}
                - Worked at Ultino Resources as a Front-End Developer, where I
                was part of the team reponsibile for building and maintaining
                not only their website but other clients website{" "}
              </li>
              <li>
                {" "}
                - Also worked with Shooly Bradt Limited as a Full stack
                developer, responsible for building and maintaining react
                applications for the companies clients
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-[min(100px)_1fr] border-b border-gray-500">
          <p className="section-experience p-2 border-r text-sm border-gray-500  text-normal font-light w-fity text-[rgba(255,255,255,0.5)]">
            2022-2023
          </p>
          <div className="px-2 py-2">
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                {" "}
                - Worked as a Freelancer, building Full stack websites and
                mobile applications using technologies like Next Js, Flutter,
                C#, MERN stack
              </li>
              <li>
                {" "}
                - Also worked on some personal project, some of which can seen
                in the project section{" "}
              </li>
            </ul>
          </div>
        </div>
        {/* HOBBIES */}
        <div className="grid grid-cols-[min(100px)_1fr] border-b border-gray-500">
          <p className="section-experience p-2 border-r border-gray-500  text-normal font-lighty w-fity text-[rgba(255,255,255,0.5)]">
            Hobbies
          </p>
          <div></div>
        </div>
        {/* HOBBIES LIST */}
        <div className="grid grid-cols-[min(100px)_1fr] border-b border-gray-500">
          <p className=" p-2 border-r border-gray-500 "></p>
          <div className="px-2 py-2">
            <ul className="space-y-1 text-sm md:text-base">
              <li> - Sight seeing</li>
              <li> - Watching Football</li>
              <li> - Playing Indoor Games - Scrabble, Ludo, Chess(Beginner)</li>
            </ul>
          </div>
        </div>
      </div>
      <Link to={'/'} className="absolute hidden md:block top-5 text-sm left-10 text-[rgba(255,255,255,0.7)] about-link ">Home</Link>
    </div>
  );
};

export default AboutPage;
