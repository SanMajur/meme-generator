import React, { useState } from "react";
import memeData from "../memeData";

export default function Meme() {
   const [memeImage, setMemeImage] = useState('')
    function getMemeImage() {
     const memesArray = memeData.data.memes
     const randomNumber = Math.floor(Math.random() * memesArray.length)
     const url = memesArray[randomNumber].url
     setMemeImage(url)
   }
  
  return (
    <main className="p-8">
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex justify-between">
          <input
            className="border border-gray-600 py-1.5 px-4 rounded-md text-sm"
            type="text"
            placeholder="Top Text"
          />
          <input
            className="border border-gray-600 py-1.5 px-4 rounded-md text-sm"
            type="text"
            placeholder="Bottom Text"
          />
        </div>
         <button className="bg-gradient-to-r from-purple-700 to-purple-600 rounded-md py-1.5 px-5 text-white hover:bg-gradient-to-r hover:from-cyan-800 hover:to-cyan-600" onClick={getMemeImage}>Get a new meme image 🖼</button>  
      </div>
       <img src={memeImage} alt="meme" className="mt-6 max-w-full rounded-md"/> 
     
    </main>
  );
}
