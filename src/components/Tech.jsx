import React from "react";

const images = import.meta.glob("../assets/svg/*", { eager: true });

const techStack = [
  { src: images["../assets/svg/html5.svg"].default, alt: "HTML5 logo" },
  { src: images["../assets/svg/css3.svg"].default, alt: "CSS3 logo" },
  { src: images["../assets/svg/js.svg"].default, alt: "JavaScript logo" },
  { src: images["../assets/svg/node.svg"].default, alt: "Node.js logo" },
  { src: images["../assets/svg/nextjs.svg"].default, alt: "Next.js logo" },
  { src: images["../assets/svg/react.svg"].default, alt: "React.js logo" },
  {
    src: images["../assets/svg/tailwind.svg"].default,
    alt: "Tailwind CSS logo",
  },
  { src: images["../assets/svg/figma.svg"].default, alt: "Figma logo" },
];

export const Tech = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center z-10">
        <h3 className="text-base md:text-xl font-semibold">Tech I Use</h3>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-10 text-4xl py-4">
          {techStack.map((tech, index) => (
            <img
              key={index}
              src={tech.src}
              alt={tech.alt}
              className={`w-6 md:w-10 ${
                tech.alt === "Figma logo" ? "h-6 md:h-10" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};
