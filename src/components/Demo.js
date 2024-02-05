import React, { useState, useMemo } from "react";
import { findPrime } from "../utilies/helper";
import Demo2 from "./Demo2";
const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  console.log('Rendering ...');
  //Heavy Operation

  const prime = useMemo(() => {
    findPrime(text);
  },[text]);

  return(
        <>
            <div className={"p-4 m-4 w-96 h-96 border border-black" + (isDarkTheme && " bg-gray-900 text-white") }>
                <div>
                    <button className="m-10 p-2 bg-green-200" onClick={() => setIsDarkTheme(!isDarkTheme)}> Toggle </button>
                </div>
                <div>
                <input
                    type="number"
                    className="border border-black w-76 px-2"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                </div>
                <div>
                    <h1 className="mt-4 font-bold text-xl"> nth Prime : {prime}</h1>   
                </div>
            </div>
            <Demo2 />
        </>
  )
};

export default Demo;
