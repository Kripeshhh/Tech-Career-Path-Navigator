import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import WebDevelopment from "./Pages/WebDevelopment";
import SoftwareDev from "./Pages/SoftwareDevelopment";
import DataAI from "./Pages/DataAI";
import Cybersecurity from "./Pages/Cybersecurity";
import UIUX from "./Pages/UIUX";

// Import your new components here
import MobileAppDevelopment from "./Pages/MobileAppDevelopment";
import GameDevelopment from "./Pages/GameDevelopment";
import CloudDevOps from "./Pages/CloudDevOps";
import BlockchainDevelopment from "./Pages/BlockchainDevelopment";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Floating subtle cyan particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Your routes content */}
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/software-development" element={<SoftwareDev />} />
          <Route path="/data-ai" element={<DataAI />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/ui-ux" element={<UIUX />} />

          {/* New routes added here */}
          <Route
            path="/mobile-app-development"
            element={<MobileAppDevelopment />}
          />
          <Route path="/game-development" element={<GameDevelopment />} />
          <Route path="/cloud-devops" element={<CloudDevOps />} />
          <Route path="/blockchain" element={<BlockchainDevelopment />} />
        </Routes>
      </div>
    </div>
  );
}
