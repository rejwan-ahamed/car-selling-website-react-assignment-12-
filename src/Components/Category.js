import React from "react";

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
    </div>
  );
};

export default Category;
