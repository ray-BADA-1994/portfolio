import React, { useState } from "react";
import Home from "../components/Home";
import Projects from "../components/Projects/Projects";
import ProjectMobile from "../components/Projects/ProjectsMobile";
import Footer from "../components/Footer";

const HomePage = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const handleToggleMenu = () => {
    setToggleSideBar(!toggleSideBar);
  };
  // console.log(toggleSideBar);
  return (
    <div>
      <div
        className={`fixed ${
          toggleSideBar
            ? " translate-x-0 opacity-100"
            : "translate-x-[-100%] opacity-0"
        } transition-all duration-700 ease-in-out inset-0 lg:relative lg:block lg:translate-x-0 lg:opacity-100`}
      >
        <Home close={handleToggleMenu} />
      </div>
      <div className="hidden md:block">
        <Projects toggle={handleToggleMenu} />
      </div>
      <div className="md:hidden">
        <ProjectMobile toggle={handleToggleMenu} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
