import React from "react";

function AddElements() {
  return (
    <div>
      <form className="grid grid-col-2 items-center text-center h-screen">
        <div className="">
          <label
            for="first_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            First name
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4 p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
        </div>
        <div>
          <button className="py-4 px-2 text-white rounded-md bg-green-500">
            deneme
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddElements;
