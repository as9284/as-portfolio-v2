import React from "react";
import { ReactTyped } from "react-typed";
import { Link } from "react-scroll";

export const Landing = () => {
  return (
    <>
      <div className="min-container">
        <h1 className="min-title">Anthony Saliba</h1>
        <h2 className="min-subtitle">Portfolio</h2>
        <div className="w-full flex justify-center items-center gap-2">
          <Link to="discover-section" smooth={true} duration={500}>
            <button className="min-button">Discover</button>
          </Link>
          <Link to="about-section" smooth={true} duration={500}>
            <button className="min-button">About Me</button>
          </Link>
        </div>

        <p className="absolute bottom-8 text-sm md:text-lg select-none">
          <span>
            <ReactTyped
              strings={[
                "Responsive and mobile-friendly interfaces",
                "Smooth and interactive user experiences",
                "Fast-loading and optimized performance",
                "Pixel-perfect implementations",
                "Accessible and inclusive design",
                "Scalable and maintainable code",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </span>
        </p>
      </div>
    </>
  );
};
