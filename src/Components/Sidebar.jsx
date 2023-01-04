import React from "react";
import SearchBar from "../Components/SearchBar";

const Sidebar = () => {
  return (
    <div className="bg-[#3e3c61] sticky  overflow-scroll overflow-x-hidden w-[30%]  ">
      <SearchBar />
      <div className="px-2 flex items-center gap-2">
        <img
          src="https://th.bing.com/th/id/OIP.tuEDbAgRLmORtOJW3M-f5AHaKX?w=186&h=260&c=7&r=0&o=5&dpr=2&pid=1.7"
          className=" rounded-xl w-[30px] h-[30px]"
        />
        <div className="flex flex-col gap-2 ">
          <h1>Name</h1>
          <h1>hello Misadah</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
