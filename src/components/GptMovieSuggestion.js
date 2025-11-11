import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { gptMovieNames, gptMoviesTMDBResult } = useSelector(
    (store) => store.gpt
  );
  // console.log(gptMoviesTMDBResult[0]);
  if (!gptMovieNames) return null;
  return (
    gptMoviesTMDBResult && (
      <div className="p-4 m-4 bg-black text-white bg-opacity-70">
        <div>
          {gptMovieNames?.map((movieName, index) => {
            // console.log(gptMoviesTMDBResult);
            return (
              // <div></div>
              <MovieList
                key={movieName}
                title={movieName}
                movies={gptMoviesTMDBResult[index]}
              />
            );
          })}
        </div>
      </div>
    )
  );
};

export default GptMovieSuggestion;
