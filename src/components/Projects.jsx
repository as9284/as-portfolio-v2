import React, { useState } from "react";
import projectsData from "../data/projectsData.json";
import { ProjectModal } from "./ProjectModal";

import wirestorm from "../assets/img/wirestorm.webp";
import memoir from "../assets/img/memoir.webp";
import cloud from "../assets/img/cloud.webp";
import movies from "../assets/img/movies.webp";
import space from "../assets/img/space.webp";
import link from "../assets/img/link.webp";

const images = {
  wirestorm,
  memoir,
  cloud,
  movies,
  space,
  link,
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="w-full flex flex-wrap flex-col md:flex-row justify-center items-center gap-12 md:gap-28 z-10">
      {projectsData.map((project) => (
        <div
          key={project.id}
          className="w-72 h-72 bg-black border-2 border-white flex flex-col justify-center items-center gap-4"
        >
          <h4 className="text-xl font-bold">{project.title}</h4>
          <button
            className="btn-push"
            onClick={() => setSelectedProject(project)}
          >
            Project Details
          </button>
          <button
            className="btn-push"
            onClick={() => window.open(project.preview, "_blank")}
          >
            Project Preview
          </button>
        </div>
      ))}

      {/* Render Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        images={images}
      />
    </div>
  );
};
