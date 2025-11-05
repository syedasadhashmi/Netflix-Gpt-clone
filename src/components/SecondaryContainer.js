import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);

  return (
    movies.nowPlayingMovies && (
      <div className="pl-4 bg-black">
        <div className="-mt-36 relative z-20">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList
            title={"Upcomming Movies"}
            movies={movies?.upComingMovies}
          />
          <MovieList title={"Popular"} movies={movies?.popularMovies} />
          <MovieList
            title={"Top-Rated Movies"}
            movies={movies?.topRatedMovies}
          />
          {/* <MovieList title={"TV-Shows"} movies={movies?.nowPlayingMovies} /> */}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
