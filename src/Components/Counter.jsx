import { useState } from "react";

const Counter = () => {
  let [counter, setCounter] = useState(0);

  function increase() {
    if (counter<20) {
        setCounter(counter++)
    }else{
    alert("You can't increase counter")
    }
  }

  function decrease() {
    if (counter > 0) {
        setCounter(counter--)
    }else{
        alert("You cant increase value because value is 0")
    }
  }

  function reset() {
    setCounter(0);
  }
  return (
      <div className="flex items-center justify-center h-screen bg-gray-500">
       <div className="border-y-1 border-white p-12 w-2xl mx-auto">
         <h1 className="text-white text-2xl text-center">Counter : {counter}</h1>
        <div className="flex justify-center text-center py-4">
          <button
            className="bg-gray-600 text-white px-4 py-2 m-4  rounded-lg"
            onClick={increase}
          >
            Increase 
          </button>
          <button
            className="bg-gray-600 text-white px-4 py-2 m-4 rounded-lg"
            onClick={decrease}
          >
            Decrease
          </button>
          <button
            className="bg-gray-600 text-white px-4 py-2 m-4 rounded-lg"
            onClick={reset}
          >
            Reset
          </button>
        </div>
       </div>
      </div>
  );
};

export default Counter;
