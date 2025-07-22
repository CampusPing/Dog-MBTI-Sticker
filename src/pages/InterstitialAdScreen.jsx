import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import GoogleAdSenseBanner from '../components/GoogleAdSenseBanner';

const InterstitialAdScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { mbti } = location.state || {};

  useEffect(() => {
    const timer = setTimeout(() => {
      if (mbti) {
        navigate('/result', { state: { mbti } });
      } else {
        navigate('/'); // MBTI 결과가 없으면 홈으로 리다이렉트
      }
    }, 2000); // 2초 후에 이동

    return () => clearTimeout(timer);
  }, [mbti, navigate]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h2 className="mb-4">광고 로딩 중...</h2>
      <GoogleAdSenseBanner type="interstitial" adSlot="YOUR_INTERSTITIAL_AD_SLOT_ID" />
      <p className="mt-3 text-muted">잠시만 기다려 주세요.</p>
    </div>
  );
};

export default InterstitialAdScreen;
