import React from "react";

const cls = "p-3 border text-gray-700 hover:text-white hover:bg-indigo-600";
const DropdownButton = ({ onClick }) => {
  return (
    <div className={cls} onClick={onClick}>
      DropdownButton
    </div>
  );
};

export default DropdownButton;
