import React from "react";

const Button = ({ name }) => {
  return (
    <button className="px-5 py-2 m-2 border bg-gray-200 rounded-xl text-black">
      {name}
    </button>
  );
};

export default Button;
