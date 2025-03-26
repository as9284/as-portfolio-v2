import React from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Tech } from "../components/Tech";

export const Home = () => {
  return (
    <div className="relative w-full min-h-dvh bg-black text-white flex flex-col justify-between p-4 text-center select-none overflow-auto">
      <div
        style={{
          backgroundColor: "#000000",
          opacity: "0.3",
          backgroundImage:
            "radial-gradient(#ffffff 0.45px, transparent 0.45px), radial-gradient(#ffffff 0.45px, #000000 0.45px)",
          backgroundSize: "18px 18px",
          backgroundPosition: "0 0, 9px 9px",
        }}
        className="absolute inset-0 w-full h-full z-0"
      />
      <Header />
      <Hero />
      <Tech />
    </div>
  );
};
