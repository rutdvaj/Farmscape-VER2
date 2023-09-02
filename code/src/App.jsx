import './App.css'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import  Navbar  from './Components/navbar'
import Herosection from './Components/herosection'

function App() {
  return (
    
    <div>
      <Navbar />
      <Herosection/>
    </div>
  )
}

export default App
