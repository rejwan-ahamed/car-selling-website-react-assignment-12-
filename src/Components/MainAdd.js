import React from "react";
import Add from "./Add";

const MainAdd = () => {
  return (
    <div className="pr-40 pl-40 pt-20 pb-20">
      <h1 className="font-general text-center font-[600] text-4xl mb-12">Our best deals of the week</h1>
      <div className="grid grid-cols-4 gap-2  font-general">
        <Add></Add>
        <Add></Add>
        <Add></Add>
        <Add></Add>
      </div>
    </div>
  );
};

export default MainAdd;
