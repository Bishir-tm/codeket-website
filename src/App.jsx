import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
    <HelmetProvider>
      <Router>
        <Helmet>
          {/* Essential SEO */}
          <title>Codeket - AI-Powered Software Solutions</title>
          <meta
            name="description"
            content="Codeket builds high-performance AI-powered software solutions, including SaaS, automation, and cloud platforms."
          />
          <meta
            name="keywords"
            content="software development, AI solutions, SaaS, cloud computing, automation, business software"
          />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Codeket" />

          {/* Open Graph for Social Media Sharing */}
          <meta property="og:title" content="Codeket - AI-Powered Software" />
          <meta
            property="og:description"
            content="Revolutionizing businesses with AI-driven SaaS and automation solutions."
          />
          <meta
            property="og:image"
            content="https://codeket.com/preview-image.jpg"
          />
          <meta property="og:url" content="https://codeket.com" />
          <meta property="og:type" content="website" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Codeket - AI Software Solutions"
          />
          <meta
            name="twitter:description"
            content="Top-rated AI-powered SaaS and automation for businesses."
          />
          <meta
            name="twitter:image"
            content="https://codeket.com/preview-image.jpg"
          />

          {/* Canonical URL */}
          <link rel="canonical" href="https://codeket.com" />

          {/* Structured Data (Rich Results) */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Codeket",
              url: "https://codeket.com",
              logo: "https://codeket.com/logo.png",
              description:
                "Codeket builds AI-powered software solutions, SaaS platforms, and automation tools for businesses worldwide.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+2349068149540",
                contactType: "Customer Support",
              },
            })}
          </script>
        </Helmet>

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

            {/* Legal Pages */}
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
