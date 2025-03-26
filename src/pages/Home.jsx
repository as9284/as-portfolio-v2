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
    <div className="relative w-full min-h-dvh bg-black text-white flex flex-col justify-center items-center p-4 text-center select-none">
      <div
        style={{
          backgroundColor: "#000000",
          opacity: "0.4",
          backgroundImage:
            "radial-gradient(#ffffff 0.45px, transparent 0.45px), radial-gradient(#ffffff 0.45px, #000000 0.45px)",
          backgroundSize: "18px 18px",
          backgroundPosition: "0 0, 9px 9px",
        }}
        className="absolute inset-0 w-full h-full z-0"
      />
      <div className="absolute w-full top-0 right-0 flex justify-between items-center p-4">
        <h3 className="text-2xl md:text-3xl font-semibold">Anthony Saliba</h3>
        <div className="flex gap-4 md:gap-8 text-3xl">
          <FaLinkedin className="cursor-pointer" />
          <FaGithub className="cursor-pointer" />
          <MdEmail className="cursor-pointer" />
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center z-10">
        <h1 className="text-3xl md:text-5xl font-bold">Frontend Developer</h1>
        <h5 className="text-base md:text-xl font-semibold uppercase">
          Portfolio
        </h5>
      </div>

      <hr className="w-60 md:w-96 border-1 my-4 z-10" />

      <div className="w-full flex justify-center items-center">
        <button className="btn-modern">Featured Projects</button>
      </div>

      <div className="absolute bottom-0 w-full flex flex-col justify-center items-center">
        <h3 className="text-lg md:text-2xl font-semibold">Tech I Use</h3>
        <div className="w-full flex justify-center items-center gap-4 md:gap-8 text-4xl py-4">
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
