import React from "react";
import { IoMdPlay } from "react-icons/io";
import { IoInformationCircleOutline } from "react-icons/io5";

const VideoTitle = ({ movieTitle, description }) => {
  return (
    <div className="w-screen aspect-video absolute pt-[18%] px-12 text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold ">{movieTitle}</h1>
      <p className="py-6 text-lg w-1/2">{description}</p>
      <div>
        <button className="p-4 px-12 text-xl font-bold bg-white rounded-lg  text-black hover:bg-opacity-80">
          <IoMdPlay className="inline-block mb-1" size={24} />
          Play
        </button>
        <button className="p-4 px-12 text-xl font-bold bg-gray-500 rounded-lg  text-white mx-2">
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
