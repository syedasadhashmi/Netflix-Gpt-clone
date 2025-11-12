import React from "react";
import { BG_IMG } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearch = () => {
  return (
    <>
      <div className="fixed  -z-10">
        <img
          src={BG_IMG}
          alt="netflix-bg"
          className="h-screen object-cover w-screen"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
