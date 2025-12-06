import './App.css'
import BgChanger from './Components/bgChanger'
import Counter from './Components/Counter'
import PasswordGenerator from './Components/PasswordGenerator'
function App() {


  return (
   <>
   <h1 className='text-2xl text-white bg-gray-400 text-center p-4 border-y-2 border-gray-500'>Practice</h1>
   <Counter />
   <BgChanger />
   <PasswordGenerator />
   </>
  )
}

export default App
