import React, { useEffect } from "react";
import {YOUTUBE_VIDEOS_API} from "../utilies/constants";
import { useDispatch, useSelector } from "react-redux";
import {getYoutubeVideos} from "../utilies/videoSlice";
import VideoCard, { withAddVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
const VideoContainer = () => {

  const dispatch = useDispatch();

  const youtubeVideos = useSelector((store) => store.video && store.video.youtubeVideos);

  const AdVideoCard = withAddVideoCard(VideoCard);

  const getVideos = async() => {
    const data = await fetch(YOUTUBE_VIDEOS_API);

    const json = await data.json();

    dispatch(getYoutubeVideos(json.items));

    console.log("json **", json);
  }

  useEffect (() => {
     !youtubeVideos && getVideos();
  },[])

  console.log('getYoutubeVideos **', youtubeVideos);

  return <div className="flex flex-wrap">
    {youtubeVideos && youtubeVideos.length > 0 && <AdVideoCard info={youtubeVideos[0]}/>}
    {
           youtubeVideos && youtubeVideos.length > 0 && youtubeVideos.map((videos) => {
          return (
            <Link key={videos.id} to={`/watch?v=${videos.id}`}><VideoCard info={videos} /></Link>
          )
        })
      }
  </div>;
};

export default VideoContainer;
