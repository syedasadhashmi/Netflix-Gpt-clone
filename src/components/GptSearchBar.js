import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMoviesTMDBResult, addMovieNames } from "../utils/gptSlice";

const GptSearchBar = () => {
  // const [inputText, setInputText] = useState("");
  const searchText = useRef(null);
  const selectedLang = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();

  // Api call for specific movie
  const movieApi = async (movie) => {
    const res = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await res.json();
    console.log(json?.results);
    return json?.results;
  };

  // openAi search api
  const searchHandler = async () => {
    // const models = await openai.models.list();
    // console.log("models", models);

    // GPT api call
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Inception, the grand budapest, parasite, don, sholay";
    const response = await openai.responses.create({
      model: "gpt-4o",
      instructions: "work as a movie recommendation system",
      input: gptQuery,
    });
    console.log(response.output_text);

    const resultArray = response.output_text.split(",");
    dispatch(addMovieNames(resultArray));

    // console.log("After Split", resultArray);
    const promiseArray = resultArray?.map((movie) => movieApi(movie));

    const resolvedPromises = await Promise.all(promiseArray);
    dispatch(addGptMoviesTMDBResult(resolvedPromises));

    // console.log("resolvedPromises", resolvedPromises);
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="col-span-9 p-4 m-4"
          type="text"
          placeholder={lang[selectedLang].gptSearchBarPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={searchHandler}
        >
          {lang[selectedLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
