import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import AIDevelopment from './pages/AIDevelopment'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import GetInTouch from './pages/GetInTouch'
import InsightsPage from './pages/InsightsPage'
import Team from './pages/Team'
import CareersPage from './pages/CareersPage'

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
          <Route path="/contact" element={<GetInTouch/>} />
          <Route path="/team" element={<Team />} />
          <Route path="/Careers" element={<CareersPage />} />
        </Routes>
        <Footer/>
    </Router>

    </>
  )
}

export default App
