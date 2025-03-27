import React, { useState } from "react";
import projectsData from "../data/projectsData.json";
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
          className="w-72 h-60 bg-black border-2 border-white flex flex-col justify-center items-center gap-4"
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

      {/* Modal Popup */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-50 p-2">
          <div className="relative w-full md:w-3/4 lg:w-1/2 h-[80%] md:h-[90%] bg-black border-2 border-white text-white flex flex-col justify-between items-center">
            {/* Project Image */}
            <img
              src={images[selectedProject.src.split(".")[0]]}
              alt={selectedProject.title}
              className="w-full object-contain mb-4"
            />

            {/* Project Details */}
            <h2 className="text-2xl md:text-3xl font-bold">
              {selectedProject.title}
            </h2>
            <p className="text-base md:text-xl pt-2 px-4">
              {selectedProject.description}
            </p>

            {/* Buttons */}
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 my-6">
              {selectedProject.title === "Wirestorm Networks" ? (
                <>
                  <button
                    className="btn-push"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn-push"
                    onClick={() =>
                      window.open(selectedProject.github, "_blank")
                    }
                  >
                    Github
                  </button>
                  <button
                    className="btn-push"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
