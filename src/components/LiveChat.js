import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utilies/chatSlice";

const LiveChat = () => {

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages)

  useEffect(() => {
    const interval = setInterval(() => {

        // API Polling

        dispatch(addMessage({
            name: "Vasanth Ravi",
            message: "Lorem lopsum fri"
        }))

    }, 2000) // Every 2 secs

    return () => clearInterval(interval);
  },[])

  return (
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-200 rounded-lg overflow-y-scroll">
        {
            chatMessages.map((chat,index) => {
                return (
                    <ChatMessage key={index} name={chat.name} message={chat.message}/>
                )
            })
        }
    </div>
  ); 
};

export default LiveChat;
