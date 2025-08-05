import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignUp = () => {
    console.log("toggle");
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate tha form data
    const message = checkValidateData(
      !isSignInForm ? name.current.value : "signInForm",
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-full h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/PK-en-20250714-TRIFECTA-perspective_3ea31bb5-14e1-41fe-997f-52b7ec8f28e4_large.jpg"
          alt="netflix-bg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-32 mx-auto right-0 left-0 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Full Name"
            className="p-4 my-4 w-full bg-gray-800 "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800 "
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full  bg-gray-800 "
        />
        <p className="text-red-800 text-lg font-bold">{errorMessage}</p>
        <button
          className="p-2 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignUp}>
          {isSignInForm
            ? " New to Netflix? Sign Up now"
            : "Already have an account?"}
        </p>
      </form>
    </div>
  );
};

export default Login;
