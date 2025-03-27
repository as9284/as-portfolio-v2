import React from "react";
import { Link } from "react-scroll";

export const Hero = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center flex-grow z-10 p-4">
        <div className="bg-black border-2 border-white p-8">
          <h1 className="text-2xl md:text-5xl font-bold">Frontend Developer</h1>
          <h5 className="text-sm md:text-xl font-semibold uppercase">
            Portfolio
          </h5>
          <hr className="w-full border-1 my-4" />
          <Link to="projects-section" smooth={true} duration={400}>
            <button className="btn-push">Featured Projects</button>
          </Link>
        </div>
      </div>
    </>
  );
};
