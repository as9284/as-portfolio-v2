import React, { useState, useEffect } from "react";
import projectsData from "../data/projectsData.json";

import { Square } from "ldrs/react";
import "ldrs/react/Square.css";

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
  const [showContent, setShowContent] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (selectedProject) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
    }
  }, [selectedProject]);

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
          <div className="relative w-full md:w-3/4 lg:w-3/5 h-[90%] md:h-[100%] bg-black border-2 border-white text-white flex flex-col justify-between items-center">
            {!showContent ? (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Square
                  size="50"
                  stroke="4"
                  strokeLength="0.25"
                  bgOpacity="0.3"
                  speed="1"
                  color="white"
                />
              </div>
            ) : (
              <>
                {/* Project Image */}
                <img
                  src={images[selectedProject.src.split(".")[0]]}
                  alt={selectedProject.title}
                  className={`cursor-pointer ${
                    isFullscreen
                      ? "fixed inset-0 w-full h-full object-contain bg-black z-50"
                      : "w-full object-contain mb-4"
                  }`}
                  onClick={() => setIsFullscreen(!isFullscreen)}
                />

                {/* Project Details */}
                {!isFullscreen && (
                  <>
                    <h2 className="text-2xl md:text-3xl font-bold">
                      {selectedProject.title}
                    </h2>
                    <p className="text-base md:text-xl pt-2 px-4">
                      {selectedProject.description}
                    </p>

                    {/* Buttons */}
                    <div className="w-full flex flex-wrap justify-center items-center gap-4 my-6">
                      {selectedProject.title === "Wirestorm Networks" ? (
                        <button
                          className="btn-push"
                          onClick={() => setSelectedProject(null)}
                        >
                          Close
                        </button>
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
                  </>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
