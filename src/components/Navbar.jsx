import React, { useState } from "react";
import Popup from "./Popup";

function Navbar() {
  
  const [open, setOpen] = useState(false)

  const openPopup = () => {
    setOpen(true);
  }
  const onClose = () => {
    setOpen(false)
  }

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          onClick={openPopup}
          className="py-2 px-4 rounded-md text-white hover:duration-500 hover:bg-green-600 duration-500 bg-green-500"
        >
          Add Element
        </button>
      </div>
      {open && (<Popup onClose={onClose} />)}
    </nav>
  );
}

export default Navbar;
