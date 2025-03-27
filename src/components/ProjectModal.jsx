import React, { useEffect, useState } from "react";
import { Square } from "ldrs/react";
import "ldrs/react/Square.css";

export const ProjectModal = ({ project, onClose, images }) => {
  const [showContent, setShowContent] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (project) {
      setShowContent(false);

      const img = new Image();
      img.src = images[project.src.split(".")[0]];

      let imageLoaded = false;

      img.onload = () => {
        imageLoaded = true;
      };

      const minDelay = setTimeout(() => {
        if (imageLoaded) {
          setShowContent(true);
        } else {
          img.onload = () => setShowContent(true);
        }
      }, 1000);

      return () => {
        clearTimeout(minDelay);
        img.onload = null;
      };
    }
  }, [project]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-50 p-2"
      onClick={onClose}
    >
      <div
        className="relative w-full md:w-3/4 lg:w-3/5 min-h-[60%] md:min-h-[90%] bg-black border-2 border-white text-white flex flex-col justify-between items-center"
        onClick={(e) => e.stopPropagation()}
      >
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
              src={images[project.src.split(".")[0]]}
              alt={project.title}
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
                  {project.title}
                </h2>
                <p className="text-base md:text-2xl font-light pt-2 px-4">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="w-full flex flex-wrap justify-center items-center gap-4 my-6">
                  {project.title === "Wirestorm Networks" ? (
                    <button className="btn-push" onClick={onClose}>
                      Close
                    </button>
                  ) : (
                    <>
                      <button
                        className="btn-push"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        Github
                      </button>
                      <button className="btn-push" onClick={onClose}>
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
  );
};
