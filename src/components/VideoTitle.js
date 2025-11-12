import React from "react";
import { IoMdPlay } from "react-icons/io";
import { IoInformationCircleOutline } from "react-icons/io5";

const VideoTitle = ({ movieTitle, description }) => {
  return (
    <div className="w-screen aspect-video absolute pt-[18%] px-12 text-white bg-gradient-to-r from-black">
      <h1 className="text-lg md:text-5xl lg:text-6xl font-bold ">
        {movieTitle}
      </h1>
      <p className="hidden  lg:inline-block py-6 text-lg w-1/2">
        {description}
      </p>
      <div className="mt-5 lg:mt-0">
        <button className="p-2 px-6 text-sm lg:p-4 lg:px-12 lg:text-xl font-bold bg-white rounded-lg  text-black hover:bg-opacity-80">
          <IoMdPlay className="inline-block mb-1" size={24} />
          Play
        </button>
        <button className="p-2 px-6 text-sm lg:p-4 lg:px-12 lg:text-xl font-bold bg-gray-500 rounded-lg  text-white mx-2">
          <IoInformationCircleOutline
            className="inline-block mb-1 mr-1"
            size={24}
          />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
