import React from "react";

const Add = () => {
  return (
    <div>
      <div class=" bg-white rounded-lg ">
        <a href="/">
          <img
            class="rounded-t-lg"
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="/">
            <h5 class="text-2xl font-[600] tracking-tight text-gray-900 dark:text-white">
              Tesla model-s
            </h5>
            <p class="mb-2 font-[600] tracking-tight text-gray-500 dark:text-white">
              SUV
            </p>
          </a>
          <div className="location flex mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>

            <p className="font-[600]">Manosata, USA</p>
          </div>
          <div className="seller flex mt-2 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clip-rule="evenodd"
              />
            </svg>

            <p className="font-[600] ">Manosata, USA</p>
          </div>
          <div className="price">
            <h1 className="font-general font-[600] text-4xl mt-2 mb-4 text-blue-700">$280</h1>
          </div>
          <a
            href="/"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buy it now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Add;
