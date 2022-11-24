import React from "react";
import Card from "./Card";

const Category = () => {
  return (
    <div>
      <div className="upper-part">
        <div class="flex justify-center items-center bg-center w-screen h-[30rem] bg-no-repeat bg-cover bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/153dcc92668173.5e50f0e471f09.jpg')]">
          <div className="car-name">
            <h1 className="font-general font-[500] text-4xl text-center text-white mb-4">
              Lambergini
            </h1>
            <h1 className="px-6 font-general font-[500] text-4xl text-center text-white border-2 border-white p-3 rounded-full">
              Total seller: 240
            </h1>
          </div>
        </div>
      </div>
      {/* bottom part */}
      <h1 className="font-general text-3xl text-center font-[600] mt-20">All available car deals right now </h1>
      <div className="bottom-part grid grid-cols-4 gap-2 px-40 py-20">
        {/* all car cards  */}
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default Category;
