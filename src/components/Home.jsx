import React, { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { skillsArr } from "../Data/HomeData";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Home = ({ close }) => {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Scroll to the top of the section with smooth behavior
      section.scrollIntoView({ behavior: "smooth" });

      // Prevent the default anchor behavior to avoid URL update
      e.preventDefault();
    }
  };

  useEffect(() => {
    //select the created element
    const follower = document.getElementById("follower");
    const caption = document.querySelector(".home-caption");

    const handleFollow = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      follower.style.transform = `translate(${x}px, ${y}px)`;
    };

    const handleAddClassName = () => {
      follower.classList.add("expand");
    };

    const handleRemoveClassName = () => {
      follower.classList.remove("expand");
    };

    document.addEventListener("mousemove",handleFollow);

    caption.addEventListener("mouseover", handleAddClassName);

    caption.addEventListener("mouseout", handleRemoveClassName);

    return () => {
      removeEventListener("mousemove", handleFollow);
      removeEventListener("mouseover", handleAddClassName);
      removeEventListener("mouseout", handleRemoveClassName);
    };
  }, []);

  return (
    <div className="h-[100vh] bg-black flex justify-center items-center relative">
      <div className=" h-screen lg:grid grid-cols-[2fr_1fr]y lg:grid-cols-[1fr_400px] flex flex-col w-full px-4 md:px-0 md:w-[400px] lg:w-full justify-center items-start gap-10 lg:gap-20">
        {/* LEFT SIDE */}
        <div className="  flex justify-end items-center lg:h-full relative">
          <Link
            to={"/about"}
            className="absolute hidden w-fit lg:block  md:top-5 text-sm md:right-5 text-[rgba(255,255,255,0.7)] about-link "
          >
            About me
          </Link>
          <div className="home-content flex-1y lg:h-full  flex flex-col justify-center space-y-5 lg:space-y-10">
            <h1 className="my-name w-fit font-light text-base text-[rgba(255,255,255,0.7)]  md:text-white border border-[rgba(255,255,255,0.2)] md:border-white px-2 py-1">
              Chinwendu Chukwu
            </h1>
            <div className={`first-introduction`}>
              <p className="font-medium md:text-2xl md:leading-[28px] text-[rgba(255,255,255,0.7)] flex lg:hidden flex-col gap-1 md:gap-2">
                <span className="px-2 block bg-[rgba(255,255,255,0.1)] w-fit">
                  In the symphony of pixels
                </span>
                <span className="px-2 block bg-[rgba(255,255,255,0.1)] w-fit">
                  and code, I orchestrate{" "}
                </span>
                <span className="px-2 block bg-[rgba(255,255,255,0.1)] w-fit">
                  seamless and captivating
                </span>
                <span className="px-2 block bg-[rgba(255,255,255,0.1)] w-fit">
                  web experiences.
                </span>
              </p>
              <p className="md:text-2xl  hidden home-caption lg:block md:leading-[28px] font-medium lg:font-normal lg:text-[35px] lg:leading-[45px]  xl:text-[60px] xl:leading-[65px] 2xl:text-[82px] 2xl:leading-[86px] 2xl:w-[700px]y text-white">
                In the symphony of pixels <br /> and code, I orchestrate <br />{" "}
                seamless and captivating <br /> web experiences.
              </p>
            </div>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="lg:h-full space-y-4 lg:w-[400px]y pl-5 flex flex-col justify-center gap-10 border-l border-[rgba(255,255,255,0.4)] md:border-[rgba(255,255,255,0.1)]">
          {/* skills */}
          <div className="skills space-y-4">
            <h3 className="font-medium text-[rgba(255,255,255,0.8)] text-lg lg:text-xl  xl:text-2xl">
              Skills:
            </h3>
            <div className=" flex items-center gap-3 flex-wrap pr-2">
              {skillsArr.map((datum, i) => (
                <span
                  key={i}
                  className="text-xs xl:text-sm font-light cursor-pointer hover:border-[rgba(255,255,255,0.5)] transition-all duration-300 ease-in-out p-1 rounded-lg border border-[rgba(255,255,255,0.2)] text-white"
                >
                  {datum}
                </span>
              ))}
            </div>
          </div>
          {/* Contact */}
          <div className="contact space-y-4">
            <h3 className="font-medium text-[rgba(255,255,255,0.8)] text-lg lg:text-xl xl:text-2xl">
              Contact:
            </h3>
            <div className="contact-details flex justify-start items-center gap-2 flex-wrap">
              <a
                href="mailto:chukwuchinwendu94@gmail.com"
                className="cursor-pointer email contact flex items-center gap-1 p-1 border border-[rgba(255,255,255,0.3)] w-fit"
              >
                <span className="text-[rgba(255,255,255,0.9)] text-sm">
                  Email <span className="hidden md:inline">:</span>
                </span>
                <span className="text-[rgba(255,255,255,0.9)] hidden md:inline-block text-sm">
                  chukwuchinwendu94@gmail.com
                </span>
              </a>
              {/* <div className="cursor-pointer linkedin contact flex items-center gap-1 p-1 border border-[rgba(255,255,255,0.3)] w-fit">
                <span className="text-[rgba(255,255,255,0.9)] text-sm">
                  LinkedIn <span className="hidden md:inline">:</span>
                </span>
                <span className="text-[rgba(255,255,255,0.9)] hidden md:inline-block text-sm">
                  www.linkedin.com/in/jb-jezequel-evaboot
                </span>
              </div> */}
              <a
                href="https://wa.me/07082111791?text=Hello%20there!"
                className="cursor-pointer whatsapp contact flex items-center gap-1 p-1 border border-[rgba(255,255,255,0.3)] w-fit"
              >
                <span className="text-[rgba(255,255,255,0.9)] text-sm">
                  WhatsApp :
                </span>
                <span className="text-[rgba(255,255,255,0.9)] text-sm">
                  07082111791
                </span>
              </a>
            </div>
          </div>
          {/* Follow on socials */}
          {/* <div className="contact space-y-4">
            <h3 className="font-medium text-[rgba(255,255,255,0.8)] text-xl">
              Follow On Socials
            </h3>
            <div className="contact-details"></div>
          </div> */}
        </div>
      </div>

      {/* SCROLL DOWN BTN */}
      <a
        href="#projects"
        onClick={() => handleScrollToSection("projects")}
        className="scroll-down_container hidden absolute bottom-20 rotate-90 left-10 lg:flex gap-2 2xl:gap-3 justify-center items-center text-white cursor-pointer"
      >
        <span className="scroll-down_text text-lg 2xl:text-xl font-extralight animate-pulsey">
          Scroll Down
        </span>
        <span className="scroll-down_icon h-[30px] w-[30px] 2xl:h-[50px] 2xl:w-[50px] 2xl:text-2xl rounded-full border flex justify-center items-center">
          <FaArrowRightLong />
        </span>
      </a>
      {/* close menu in mobile */}
      <div
        onClick={() => close()}
        className="absolute lg:hidden top-10 right-10 md:top-32 md:right-10"
      >
        <motion.span
          whileTap={{ scale: 0.9 }}
          className="info-icon md:text-3xl text-white h-[30px] md:h-[50px] w-[30px]  md:w-[50px] flex justify-center items-center rounded-full border"
        >
          <IoMdClose />
        </motion.span>
      </div>
    </div>
  );
};

export default Home;
