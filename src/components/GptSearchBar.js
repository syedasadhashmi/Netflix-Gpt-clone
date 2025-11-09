import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";
import openai from "../utils/openai";

const GptSearchBar = () => {
  // const [inputText, setInputText] = useState("");
  const searchText = useRef(null);
  const selectedLang = useSelector((store) => store.config.lang);
  const searchHandler = async () => {
    console.log(searchText.current.value);
    console.log(process.env.REACT_APP_OPEN_AI_KEY);
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
