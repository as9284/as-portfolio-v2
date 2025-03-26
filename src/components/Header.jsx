import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Header = () => {
  function openLink(url) {
    window.open(url, "_blank");
  }

  function mailToEmail(email) {
    window.open(`mailto:${email}`, "_blank");
  }

  return (
    <>
      <div className="w-full flex justify-between items-center p-4 z-10">
        <h3 className="text-xl md:text-3xl font-semibold">Anthony Saliba</h3>
        <div className="flex gap-4 md:gap-8 text-2xl md:text-3xl">
          <FaLinkedin
            className="cursor-pointer"
            onClick={() =>
              openLink("https://www.linkedin.com/in/anthony-saliba-5205311b5")
            }
          />
          <FaGithub
            className="cursor-pointer"
            onClick={() => openLink("https://github.com/as9284")}
          />
          <MdEmail
            className="cursor-pointer"
            onClick={() => mailToEmail("anthonys68892@gmail.com")}
          />
        </div>
      </div>
    </>
  );
};
