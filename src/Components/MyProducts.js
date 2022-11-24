import React from "react";

const MyProducts = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-40">
      <div className="top-section">
        <h1 className="text-2xl font-general font-[600] text-left pt-10">
          Your product list
        </h1>
        <p className="font-general font-[500] mb-3">
          Your all products list. Click on add to show your product add.
        </p>
      </div>
      {/* table part start from here */}
      <div className="table-main py-10">
        <div class="overflow-x-auto relative">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-[#F6F7F9] border-b border-gray-200">
              <tr>
                <th scope="col" class="py-3 px-6">
                  Product name
                </th>
                <th scope="col" class="py-3 px-6">
                  Location
                </th>
                <th scope="col" class="py-3 px-6">
                  Old price
                </th>
                <th scope="col" class="py-3 px-6">
                  Price
                </th>
                <th scope="col" class="py-3 px-6">
                  Used time
                </th>
                <th scope="col" class="py-3 px-6">
                  Set add
                </th>
                <th scope="col" class="py-3 px-6">
                  delete
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-[#F6F7F9] border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td class="py-4 px-6">Sliver</td>
                <td class="py-4 px-6">Laptop</td>
                <td class="py-4 px-6">$2999</td>
                <td class="py-4 px-6">$2999</td>
                <td class="py-4 px-6">
                  <button
                    type="button"
                    class="py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Advertisement
                  </button>
                </td>
                <td class="py-4 px-6">
                  <button
                    type="button"
                    class="py-2 px-3 text-xs font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* table part start end here */}
    </div>
  );
};

export default MyProducts;
