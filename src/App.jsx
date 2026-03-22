import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Mainpage from "./pages/mainpage/mainpage.jsx";
import {Aboutpage} from "./pages/aboutpage/aboutpage.jsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/mainpage" replace />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/aboutpage" element={<Aboutpage />} />
      </Routes>
    </>
  )
}

export default App
