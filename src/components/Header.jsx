import React from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44 "
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix-Logo"
      />
      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12 rounded-md"
            src={user.photoURL}
            alt="user-icon"
          />
          <button
            onClick={handleSignout}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full h-12 mx-4"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
