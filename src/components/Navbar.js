import React from "react";

export default function Navbar() {
  return (
    <header className="text-white bg-gradient-to-r from-purple-700 to-purple-600 flex items-center h-[65px] p-5">
   
        <img src="/images/troll-face.png" alt="troll face"  className="h-full mr-1.5"/>
        <h3 className="mr-auto text-xl">meme generator</h3>
      
      <p className="text-xs font-medium">React Course - Project 3</p>
    </header>
  );
}
