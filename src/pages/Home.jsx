import React from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Tech } from "../components/Tech";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { BgPattern } from "../components/BgPattern";

export const Home = () => {
  return (
    <>
      <div className="custom-section min-h-dvh">
        <BgPattern />
        <Header />
        <Hero />
        <Tech />
      </div>

      <div
        id="projects-section"
        className="custom-section"
      >
        <BgPattern />
        <Projects />
      </div>

      <div className="custom-section">
        <BgPattern />
        <Contact />
      </div>
    </>
  );
};
