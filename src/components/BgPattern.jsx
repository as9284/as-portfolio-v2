import React from "react";

export const BgPattern = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#000000",
          opacity: "0.5",
          backgroundImage:
            "radial-gradient(#ffffff 0.45px, transparent 0.45px), radial-gradient(#ffffff 0.45px, #000000 0.45px)",
          backgroundSize: "18px 18px",
          backgroundPosition: "0 0, 9px 9px",
        }}
        className="absolute inset-0 w-full h-full z-0"
      />
    </>
  );
};
