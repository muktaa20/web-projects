import { useState } from 'react'
import './App.css'
import BgChanger from './Components/BgChanger'
function App() {

  let [counter, setCounter] = useState(0)

function increase(){
setCounter(counter++)
if(counter>20) return `you cant increase counter`
}

function decrease(){
setCounter(counter--)
if(counter<=0) return false
}

function reset(){
  setCounter(counter = " 0")
}

  return (
    <div className='bg-gray-500'>
    <BgChanger />
    <h1 className='text-white text-2xl text-center'>Counter : {counter}</h1>
   <div className='flex justify-center text-center py-4'>
     <button className='bg-gray-600 text-white px-4 py-2 m-4  rounded-lg' onClick={increase}>Increase {counter}</button>
    <button className='bg-gray-600 text-white px-4 py-2 m-4 rounded-lg' onClick={decrease}>Decrease{counter}</button>
    <button className='bg-gray-600 text-white px-4 py-2 m-4 rounded-lg' onClick={reset}>Reset{counter}</button>
   </div>
    </div>
  )
}

export default App
