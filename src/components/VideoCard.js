import React from "react";

const VideoCard = ({info}) => {

    const {snippet, statistics} = info;

    const { channelTitle, title, thumbnails} = snippet;

  return <div className="p-2 m-2 w-64 rounded-xl shadow-lg hover:scale-125 hover:m-30 cursor-pointer">
    <img className="rounded-lg" src={thumbnails?.medium?.url} alt="thumbnail" />
    <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
    </ul>
  </div>;
};

export const withAddVideoCard = (VideoCard) => {
    return ({info}) => {
        return (
            <div>
                <VideoCard info={info}/>
                <div className="text-center">
                    <button className="text-center rounded-lg bg-gray-600 text-white w-28"> Ad </button>
                </div>
            </div>
        
        )
    }
}

export default VideoCard;
