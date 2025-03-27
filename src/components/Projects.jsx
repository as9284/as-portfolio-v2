import React from "react";
import projectsData from "../data/projectsData.json";

export const Projects = () => {
  return (
    <div className="w-full flex flex-wrap flex-col md:flex-row justify-center items-center gap-12 md:gap-28 z-10">
      {projectsData.map((project) => (
        <div
          key={project.id}
          className="w-72 h-60 bg-black border-2 border-white flex flex-col justify-center items-center gap-4"
        >
          <h4 className="text-xl font-bold">{project.title}</h4>
          <button className="btn-push">Project Details</button>
          <button
            className="btn-push"
            onClick={() => window.open(project.preview, "_blank")}
          >
            Project Preview
          </button>
        </div>
      ))}
    </div>
  );
};
