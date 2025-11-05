import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const isSearchGpt = useSelector((store) => store.gpt.isGptShow);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unSubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const gptToggleHandler = () => {
    dispatch(toggleGptView());
  };

  const languageHandler = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO_URL} alt="netflix-logo" />
      {user && (
        <div className="flex self-center">
          {isSearchGpt && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={languageHandler}
            >
              {SUPPORTED_LANGUAGES.map((options) => (
                <option key={options.identifier} value={options.identifier}>
                  {options.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="text-white p-2 mr-2 px-4 bg-purple-600 rounded-lg font-bold"
            onClick={gptToggleHandler}
          >
            {isSearchGpt ? "Home" : "GPT Search"}
          </button>
          <img className="h-12" alt="user-icon" src={user?.photoURL} />
          <button onClick={handleSignOut} className="font-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
