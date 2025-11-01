import { useState } from 'react'
import './App.css'

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
    <>
    <h1>Counter : {counter}</h1>
    <button onClick={increase}>Increase{counter}</button>
    <button onClick={decrease}>Decrease{counter}</button>
    <button onClick={reset}>Reset{counter}</button>
    </>
  )
}

export default App
