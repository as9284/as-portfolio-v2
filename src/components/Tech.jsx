import React from "react";

const images = import.meta.glob("../assets/svg/*", { eager: true });

const techStack = [
  {
    src: images["../assets/svg/html5.svg"].default,
    alt: "HTML5 logo",
    name: "HTML5",
  },
  {
    src: images["../assets/svg/css3.svg"].default,
    alt: "CSS3 logo",
    name: "CSS3",
  },
  {
    src: images["../assets/svg/js.svg"].default,
    alt: "JavaScript logo",
    name: "JavaScript",
  },
  {
    src: images["../assets/svg/node.svg"].default,
    alt: "Node.js logo",
    name: "Node.js",
  },
  {
    src: images["../assets/svg/flutter.svg"].default,
    alt: "Flutter logo",
    name: "Flutter",
  },
  {
    src: images["../assets/svg/react.svg"].default,
    alt: "React.js logo",
    name: "React.js",
  },
  {
    src: images["../assets/svg/tailwind.svg"].default,
    alt: "Tailwind CSS logo",
    name: "Tailwind CSS",
  },
  {
    src: images["../assets/svg/figma.svg"].default,
    alt: "Figma logo",
    name: "Figma",
  },
];

export const Tech = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center z-10">
        <h3 className="text-base md:text-xl font-semibold">Tech I Use</h3>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-10 text-4xl py-4">
          {techStack.map((tech, index) => (
            <div key={index} className="relative group">
              <img
                src={tech.src}
                alt={tech.alt}
                className={`w-6 md:w-10 ${
                  tech.alt === "Figma logo" ? "h-6 md:h-10" : ""
                }`}
              />
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black border-2 border-white text-white text-sm py-1 px-2 text-nowrap">
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
