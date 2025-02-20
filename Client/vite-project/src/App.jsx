import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import EbookMainPage from './pages/EbookMainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
        <Route path="/" element={<EbookMainPage/>} />
    </Routes>
      
    </>
  )
}

export default App
