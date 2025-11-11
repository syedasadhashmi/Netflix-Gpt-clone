import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ movie }) => {
  // console.log(movie);
  if (!movie?.poster_path) return null;
  return (
    <div className="w-48 pr-4">
      <img alt={movie.title} src={IMG_CDN + movie?.poster_path} />
    </div>
  );
};

export default MovieCard;
