import React from "react";

import Sidebar from "../Components/Sidebar";
import Chat from "../Components/Chat";


const Application = () => {
  return (
    <div className="flex justify-center bg-blue-700 items-center h-screen ">
      <div className="max-w-full flex    w-[90%]">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Application;
