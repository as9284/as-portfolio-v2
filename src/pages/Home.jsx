import React from "react";
import { Landing } from "../components/Landing";
import { Projects } from "../components/Projects";

export const Home = () => {
  return (
    <>
      <div className="max-w-5xl min-h-screen m-auto flex flex-col justify-center items-center">
        <Landing />
        <div id="discover-section">
          <Projects />
        </div>
      </div>
    </>
  );
};
