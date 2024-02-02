import React from "react";

const ChatMessage = ({name, message}) => {
  return <div className="flex items-center shadow-sm py-2">
    <img
        src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png"
        className="h-8"
        alt="userIcon"
    />
    <span className="font-bold p-2">{name}</span>
    <span>{message}</span>
  </div>;
};

export default ChatMessage;
