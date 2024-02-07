import React from "react";

export default function Meme() {
    function handleClick(e) {
        e.preventDefault()
        console.log("I was clicked!")
    }
    function handleOnMouseHover() {
        console.log("The mouse was moved over!")
    }
  return (
    <main className="p-8">
      <form className="flex flex-col gap-4 mt-4">
        <div className="flex justify-between">
          <input className="border border-gray-600 py-1.5 px-4 rounded-md text-sm" type="text" placeholder="Top Text" />
          <input className="border border-gray-600 py-1.5 px-4 rounded-md text-sm" type="text" placeholder="Bottom Text" />
        </div>
        <div className="h-[150px] bg-cyan-800 hover:bg-sky-600" onMouseEnter={handleOnMouseHover}></div>
        <button className="bg-gradient-to-r from-purple-700 to-purple-600 rounded-md py-1.5 px-5 text-white hover:bg-gradient-to-r hover:from-cyan-800 hover:to-cyan-600" onClick={handleClick}>Get a new meme image 🖼</button>
      </form>
    </main>
  );
}
