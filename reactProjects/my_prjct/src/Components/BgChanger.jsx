import React, { useState } from "react";

const BgChanger = () => {
  let [color, setColor] = useState("olive");
  return (
    <div className="w-full h-screen"
    style={{ backgroundColor: color }}>
      <div className="bg-amber-100 border-amber-100 p-2 m-4 rounded-4xl flex justify-center items-center">
        <button onClick={() => setColor("red")} className="bg-red-600 text-white px-4 py-2 m-4  rounded-lg">
          Red
        </button>
        <button onClick={() => setColor("blue")} className="bg-blue-600 text-white px-4 py-2 m-4  rounded-lg">
          Blue
        </button>
        <button onClick={() => setColor("green")} className="bg-green-600 text-white px-4 py-2 m-4  rounded-lg">
          Green
        </button>
        <button onClick={() => setColor("black")} className="bg-black text-white px-4 py-2 m-4  rounded-lg">
          Black
        </button>
        <button onClick={() => setColor("white")} className="bg-white text-gray px-4 py-2 m-4  rounded-lg">
          White
        </button>
        <button onClick={() => setColor("pink")} className="bg-pink-600 text-white px-4 py-2 m-4  rounded-lg">
          Pink
        </button>
        <button onClick={() => setColor("purple")} className="bg-purple-600 text-white px-4 py-2 m-4  rounded-lg">
          Purple
        </button>
      </div>
    </div>
  );
};

export default BgChanger;
