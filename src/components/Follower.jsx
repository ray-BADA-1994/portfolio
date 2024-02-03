
import React, { useState, useEffect } from "react";

const Follower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id="follower"
      style={{
        position: "absolute",
        width: "20px",
        height: "20px",
        backgroundColor: "red",
        borderRadius: "50%",
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.1s ease-in-out",
      }}
    />
  );
};

export default Follower;
