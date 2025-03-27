import React from "react";

export const Hero = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center flex-grow z-10 p-4">
        <div className="bg-black border-2 border-white p-8">
          <h1 className="text-3xl md:text-5xl font-bold">Frontend Developer</h1>
          <h5 className="text-base md:text-xl font-semibold uppercase">
            Portfolio
          </h5>
          <hr className="w-60 md:w-96 border-1 my-4" />
          <button className="btn-push">Featured Projects</button>
        </div>
      </div>
    </>
  );
};
