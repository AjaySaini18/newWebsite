import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import AIDevelopment from './pages/AIDevelopment'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import InsightsPage from './pages/InsightsPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai" element={<AIDevelopment />} />
          <Route path="/insights" element={<InsightsPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
