import { Routes, Route, Router } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import HMStest from "./components/HMStest";
import LMStest from "./components/LMStest";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import CaseStudies from "./pages/CaseStudies";
import Consultation from "./pages/Consultation";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ScrollToTop from "./components/Common/ScrollToTop";
import "./App.css";

function App() {
  return (
    <div className="relative">
      <ScrollToTop />
      <Routes>
        {/* Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/hms" element={<HMStest />} />
        <Route path="/lms" element={<LMStest />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/consultation" element={<Consultation />} />

        {/* Legal */}
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* <Route path="/cookie-policy" element={<CookiePolicy />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
