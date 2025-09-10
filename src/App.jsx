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
import ScrollToTop from './components/ScrollToTop'
import Faq from './pages/Faq'
import IndustriesPage from './pages/IndustriesPage'
import TermsAndPolicy from './pages/TermsAndPolicy'
import HealthCare from './pages/HealthCare'
import Education from './pages/Education'
import Logistics from './pages/Logistics'
import SaaS from './pages/SaaS'
import ECommerce from './pages/ECommerce'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai" element={<AIDevelopment />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/contact" element={<GetInTouch/>} />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/terms-and-policy" element={<TermsAndPolicy />} />
          <Route path="/healthcare" element={<HealthCare/>} />
          <Route path="/education" element={<Education/>} />
          <Route path="/logistics" element={<Logistics/>} />
          <Route path="/saas" element={<SaaS/>} />
          <Route path="/e-commerce" element={<ECommerce/>} />
        </Routes>
        <Footer/>
    </Router>

    </>
  )
}

export default App
