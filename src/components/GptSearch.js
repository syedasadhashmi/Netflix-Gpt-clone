import React from "react";
import { BG_IMG } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute  -z-10">
        <img src={BG_IMG} alt="netflix-bg" className="w-screen fixed" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
