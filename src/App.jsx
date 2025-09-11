import { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components (keep these eagerly loaded because they are small and used on every page)
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load all pages
const Home = lazy(() => import("./pages/Home"));
const AIDevelopment = lazy(() => import("./pages/AIDevelopment"));
const GetInTouch = lazy(() => import("./pages/GetInTouch"));
const InsightsPage = lazy(() => import("./pages/InsightsPage"));
const Team = lazy(() => import("./pages/Team"));
const Faq = lazy(() => import("./pages/Faq"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const IndustriesPage = lazy(() => import("./pages/IndustriesPage"));
const TermsAndPolicy = lazy(() => import("./pages/TermsAndPolicy"));
const HealthCare = lazy(() => import("./pages/HealthCare"));
const Education = lazy(() => import("./pages/Education"));
const Logistics = lazy(() => import("./pages/Logistics"));
const SaaS = lazy(() => import("./pages/SaaS"));
const ECommerce = lazy(() => import("./pages/ECommerce"));
const Blockchain = lazy(() => import("./pages/Blockchain"));
const ARVR = lazy(() => import("./pages/ARVR"));
const CloudComputing = lazy(() => import("./pages/CloudComputing"));
const IOT = lazy(() => import("./pages/IOT"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      {/* Suspense shows fallback until lazy components are loaded */}
      <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai" element={<AIDevelopment />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/contact-us" element={<GetInTouch />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/terms-and-policy" element={<TermsAndPolicy />} />
          <Route path="/healthcare" element={<HealthCare />} />
          <Route path="/education" element={<Education />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/saas" element={<SaaS />} />
          <Route path="/e-commerce" element={<ECommerce />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/ar-vr" element={<ARVR />} />
          <Route path="/cloud-computing" element={<CloudComputing />} />
          <Route path="/iot" element={<IOT />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
