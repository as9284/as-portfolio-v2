import React from "react";

export const Contact = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center z-10">
        <div className="w-full md:w-3/4 lg:w-1/2 bg-black border-2 border-white py-8 md:px-8">
          <h4 className="text-2xl md:text-3xl font-bold">Contact Me</h4>
          <p className="text-sm md:text-lg font-light mb-2">
            Send me an email easily through this form!
          </p>

          <form
            action="https://formsubmit.co/anthonys68892@gmail.com"
            method="POST"
            className="w-full flex flex-col justify-center items-center p-4 gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="input-push"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="input-push"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="input-push h-48 resize-none"
            ></textarea>

            <button type="submit" className="btn-push mt-2">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
