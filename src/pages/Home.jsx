import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const images = import.meta.glob("../assets/svg/*", { eager: true });

const techStack = [
  { src: images["../assets/svg/html5.svg"].default, alt: "HTML5 logo" },
  { src: images["../assets/svg/css3.png"].default, alt: "CSS3 logo" },
  { src: images["../assets/svg/js.png"].default, alt: "JavaScript logo" },
  { src: images["../assets/svg/node.svg"].default, alt: "Node.js logo" },
  { src: images["../assets/svg/react.png"].default, alt: "React.js logo" },
  {
    src: images["../assets/svg/tailwind.png"].default,
    alt: "Tailwind CSS logo",
  },
  { src: images["../assets/svg/figma.svg"].default, alt: "Figma logo" },
];

export const Home = () => {
  return (
    <div className="relative w-full min-h-dvh bg-black text-white flex flex-col justify-between p-4 text-center select-none overflow-auto">
      <div
        style={{
          backgroundColor: "#000000",
          opacity: "0.2",
          backgroundImage:
            "radial-gradient(#ffffff 0.45px, transparent 0.45px), radial-gradient(#ffffff 0.45px, #000000 0.45px)",
          backgroundSize: "18px 18px",
          backgroundPosition: "0 0, 9px 9px",
        }}
        className="absolute inset-0 w-full h-full z-0"
      />

      {/* Header */}
      <div className="w-full flex justify-between items-center p-4 z-10">
        <h3 className="text-xl md:text-3xl font-semibold">Anthony Saliba</h3>
        <div className="flex gap-4 md:gap-8 text-2xl md:text-3xl">
          <FaLinkedin className="cursor-pointer" />
          <FaGithub className="cursor-pointer" />
          <MdEmail className="cursor-pointer" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center flex-grow z-10 p-4">
        <h1 className="text-3xl md:text-5xl font-bold">Frontend Developer</h1>
        <h5 className="text-base md:text-xl font-semibold uppercase">
          Portfolio
        </h5>
        <hr className="w-60 md:w-96 border-1 my-4" />
        <button className="btn-modern">Featured Projects</button>
      </div>

      {/* Tech Stack Section */}
      <div className="w-full flex flex-col justify-center items-center z-10">
        <h3 className="text-lg md:text-2xl font-semibold">Tech I Use</h3>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-4xl py-4">
          {techStack.map((tech, index) => (
            <img
              key={index}
              src={tech.src}
              alt={tech.alt}
              className={`w-8 md:w-12 ${
                tech.alt === "Figma logo" ? "h-8 md:h-12" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
