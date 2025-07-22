import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './pages/Start';
import Question from './pages/Question';
import Result from './pages/Result';
import GoogleAdSenseBanner from './components/GoogleAdSenseBanner';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="main-layout">
          <div className="side-ad">
            <GoogleAdSenseBanner type="side" adSlot="YOUR_SIDE_AD_SLOT_ID_1" />
          </div>
          <div className="wrapper">
            <Routes>
              <Route path="/" element={<Start />} />
              <Route path="/question" element={<Question />} />
              <Route path="/interstitial-ad" element={<InterstitialAdScreen />} />
              <Route path="/result" element={<Result />} />
            </Routes>
          </div>
          <div className="side-ad">
            <GoogleAdSenseBanner type="side" adSlot="YOUR_SIDE_AD_SLOT_ID_2" />
          </div>
        </div>
        <GoogleAdSenseBanner type="bottom" adSlot="YOUR_BOTTOM_AD_SLOT_ID" />
      </div>
    </BrowserRouter>
  );
}

export default App;
