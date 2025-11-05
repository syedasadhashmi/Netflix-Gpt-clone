import React from "react";
import { BG_IMG } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute  -z-10">
        <img src={BG_IMG} alt="netflix-bg" className="w-screen" />
      </div>
      <GptSearchBar />
    </div>
  );
};

export default GptSearch;
