import React from "react";

const Comment = ({data}) => {
    const {name, text, replies} = data;
  return <div className="flex shadow-lg bg-gray-300 p-2 m-4 rounded-lg">
    <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png"
          className="w-12 h-12"
          alt="userIcon"
    />
    <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
    </div>
  </div>;
};

export default Comment;
