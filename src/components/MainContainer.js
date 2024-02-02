import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {

  return (
    <div className="px-7 overflow-x-hidden">
      <ButtonList />
      <VideoContainer />
    </div>
    );
};

export default MainContainer;
