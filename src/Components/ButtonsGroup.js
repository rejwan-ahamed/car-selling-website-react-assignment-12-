import React from "react";
import { Link } from "react-router-dom";

const ButtonsGroup = () => {
  return (
    <div className="botton-group-main flex justify-center flex-col items-center mb-20 mt-20">
        <h1 className="font-general mb-6 font-[500] text-xl">Select your favourite card category</h1>
      <div className="grid grid-cols-4 justify-center items-center w-[30rem]">
        <Link className="main-div border-2 w-[7rem] rounded-md flex justify-center items-center hover:bg-blue-200 hover:border-blue-600">
          <img
            src="/Images/freod.png"
            alt=""
            srcset=""
            className="w-[3rem] p-2"
          />
        </Link>
        <Link className="main-div border-2 w-[7rem] rounded-md flex justify-center items-center hover:bg-blue-200 hover:border-blue-600">
          <img
            src="/Images/marsedis.png"
            alt=""
            srcset=""
            className="w-[3rem] p-2"
          />
        </Link>
        <Link className="main-div border-2 w-[7rem] rounded-md flex justify-center items-center hover:bg-blue-200 hover:border-blue-600">
          <img
            src="/Images/lambergini.png"
            alt=""
            srcset=""
            className="w-[3rem] p-2"
          />
        </Link>
        <Link className="main-div border-2 w-[7rem] rounded-md flex justify-center items-center hover:bg-blue-200 hover:border-blue-600">
          <img src="/Images/po.png" alt="" srcset="" className="w-[3rem] p-2" />
        </Link>
      </div>
    </div>
  );
};

export default ButtonsGroup;
