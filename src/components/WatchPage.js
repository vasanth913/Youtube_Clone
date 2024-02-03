import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utilies/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "../components/LiveChat";
const WatchPage = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  //  ?&autoplay=1

  return (
      <div className="flex flex-col w-full">
        <div className="px-5 flex w-full">
          <div className="">
            <iframe
              className="aspect-video"
              width="950"
              height="600"
              src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
            </div>
          <div className="w-full">
            <LiveChat />
          </div>
        </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
