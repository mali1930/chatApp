import Input from "../Components/Input";
import React from "react";
import Messages from "./Messages";
import Navbar from "./Navbar";

const Chat = () => {
  return (
    <div className="w-[70%] bg-purple-100">
      <Navbar />
      <div className=" bg-[#6675ad] flex justify-between py-3 px-2">
        <div>Misadah</div>
        <div className="flex gap-3">
          <h1>Call</h1>
          <h1>FaceTime</h1>
        </div>
      </div>
      <div className="overflow-scroll ">
        <Messages />
      </div>
      <Input />
    </div>
  );
};

export default Chat;
