import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utilies/appSlice";
import { YOUTUBE_SEARCH_API } from "../utilies/constants";
import { cacheResults } from "../utilies/searchSlice";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const searchCache = useSelector((store)=> store.search)

  useEffect(() => {
    // Make an API call after every key press
    //but the difference between 2 API calls is <200ms
    // decline an API call
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
 
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery] : json[1]
    }))
  };

  /**
   * key -i
   * - render the component
   * - useEffect();
   * - start timer => make an api call after 200 ms
   *
   * key -ip
   *  - destroy the component(useEffect return method)
   *  - re-render the component
   *  - useEffect();
   *  - start timer => make an api call after 200 ms
   *
   *  setTimeout(200) - make an API call
   */
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <ul className="flex py-3 h-12">
      <li className="mx-5 pt-1 cursor-pointer">
        <img
          onClick={() => toggleMenuHandler()}
          src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"
          className="h-8"
          alt="Hamburger Menu"
        />
      </li>
      <li>
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1024px-Logo_of_YouTube_%282015-2017%29.svg.png"
            className="pt-1 h-8"
            alt="youtube Logo"
          />
        </a>
      </li>
      <li className="mx-auto my-1">
        <div>
          <input
            className="w-24 md:w-96 md:h-8 px-3 rounded-l-full border border-gray-400"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border bg-gray-400 border-gray-400 md:h-8 px-3 rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute z-40 bg-white md:w-96 py-2 px-5 rounded-xl shadow-lg border border-gray-100">
            <ul>
              {suggestions.map((suggestion) => {
                return (
                  <li
                    className="py-2 px-3 shadow-sm hover:bg-gray-100"
                    key={suggestion}>
                    <span className="pr-3">🔍</span>{suggestion}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </li>
      <li className="mr-5">
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png"
          className="h-8"
          alt="userIcon"
        />
      </li>
    </ul>
  );
};

export default Header;
