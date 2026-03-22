import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Mainpage from "./pages/mainpage/mainpage.jsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/mainpage" replace />} />
        <Route path="/mainpage" element={<Mainpage />} />
      </Routes>
    </>
  )
}

export default App
