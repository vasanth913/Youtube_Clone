import React from "react";
import {useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);


  //Early Return
  // if(!isMenuOpen) return null;

  return (
    <div>
     {
        isMenuOpen ?
        (
        <div id="menu" className="rounded-lg w-48">
          <ul>
            <li><Link to="/"><span className="pr-5">🏠</span>Home</Link></li>
            <li className="pt-8"><span className="pr-5">👌</span>Shorts</li>
            <li className="pt-8"><span className="pr-5">☝️</span>Subscriptions</li>
            <li className="pt-8"><span className="pr-5">🎥</span>Movies</li>
          </ul>
          <h1 className="font-bold pt-8"> Subscriptions </h1>
          <ul className="pt-3">
            <li className="pt-4"><span className="pr-5">🎵</span>Music</li>
            <li className="pt-8"><span className="pr-5">🏓</span>Sports </li>
            <li className="pt-8"><span className="pr-5">🎯</span>Gaming </li>
            <li className="pt-8"><span className="pr-5">🍿</span>Movies </li>
          </ul>
        </div>
        )
      :
        (
          <div id="menu" className="rounded-lg w-20">
              <ul>
                <li><Link to="/"><span className="pr-5">🏠</span></Link></li>
                <li className="pt-8"><span className="pr-5">👌</span></li>
                <li className="pt-8"><span className="pr-5">☝️</span></li>
                <li className="pt-8"><span className="pr-5">🎥</span></li>
              </ul>
            </div>
        )
     }
    </div>
  )
};

export default Sidebar;
