import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../provider/slice/colorSlice";

function Popup({ onClose }) {
  
  const colorSlice = useSelector((state) => state.color.value);
  const dispatch = useDispatch();
  const [color, setColor] = useState(colorSlice)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("click");
  };

  const changeColor = () => {
    setColor(dispatch(change()));
  }

  console.log(color.payload)

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-4 h-3/4 w-3/4 rounded-md shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="items-center col-span-1  text-black text-center">
            <h1 className="text-3xl  font-medium leading-tight">
              Added Element
            </h1>
            <form onSubmit={handleSubmit} className="mt-24">
              <div>
                <input
                  type="text"
                  className="m-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="element"
                />
              </div>
              <div className="flex justify-center mt-16 items-center">
                <h1 className="mr-5">Select color:</h1>
                <input type="color" value={colorSlice} onChange={changeColor} />
              </div>
              <div className="mt-16 justify-around flex ">
                <button
                  onClick={onClose}
                  className="w-2/5 rounded-md py-2 px-4 bg-red-500 text-white "
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-2/5 rounded-md  py-2 px-4 bg-green-400 text-white"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="border-solid border-l  col-span-2 text-center relative">
            <div className="md:h-1/2 md:w-3/4 sm:h-3/4 sm:w-full  rounded-xl relative  ">
              <h1 className="text-3xl font-medium leading-tight">List</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
