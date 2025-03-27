import React from "react";

const projects = [
  { name: "Wirestorm Networks" },
  { name: "Memoir" },
  { name: "Sky Cloud" },
  { name: "Holo Movies" },
  { name: "Space Rise" },
  { name: "Clean Link" },
];

export const Projects = () => {
  return (
    <>
      <div className="w-full flex flex-wrap flex-col md:flex-row justify-center items-center gap-12 md:gap-28 z-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-72 h-60 bg-black border-2 border-white flex flex-col justify-center items-center gap-4"
          >
            <h4 className="text-xl font-bold">{project.name}</h4>
            <button className="btn-push">Project Details</button>
            <button className="btn-push">Project Preview</button>
          </div>
        ))}
      </div>
    </>
  );
};
