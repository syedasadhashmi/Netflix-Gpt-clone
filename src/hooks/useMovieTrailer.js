import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const fetchVideos = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await res.json();
      const filterData = json.results.filter(
        (movie) => movie.type === "Trailer"
      );
      const showVideo = filterData ? filterData[0] : json.results[0];
      dispatch(addMovieTrailer(showVideo));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);
};

export default useMovieTrailer;
