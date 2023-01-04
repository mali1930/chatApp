import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Auth } from "./context/Auth";

const Navbar = () => {
  const { currentUser } = useContext(Auth);

  return (
    <div className="bg-[#2f2d52] text-white justify-between flex flex-wrap px-2 items-center  h-20 max-w-full">
      <div>
        <h1 className="text-xl">Chat-App</h1>
      </div>
      {/* users */}
      <div className="flex gap-3 px-1 ">
        <div className="flex gap-3 ">
          {/* <img src={currentUser.photoURL} alt="img"/> */}
          <div>
            {/* <span>{currentUser.displayName}</span>  */}
          </div>
        </div>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
