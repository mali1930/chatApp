import React from "react";

const Input = () => {
  return (
    <div className="bg-white flex items-center  sticky z-50 ">
      <input
        type="text"
        placeholder="Text"
        className="px-2 w-[100%] py-5 h-[50px] "
      />
      <div className="flex items-center md:gap-8 gap-2 md:px-10 px-3" >
        {/* <img src="" alt=""/> */}
        <input className="hidden w-[20%]" type="file" id="file" />
        <label htmlFor="file">
          <h1>img</h1>
        </label>
        <button className="bg-purple-400 py-2 px-6 text-white">send</button>
      </div>
    </div>
  );
};

export default Input;
