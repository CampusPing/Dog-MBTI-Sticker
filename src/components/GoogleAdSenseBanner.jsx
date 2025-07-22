import React, { useEffect } from 'react';

const GoogleAdSenseBanner = ({ type, adSlot }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error: ", e);
    }
  }, []);

  const adStyle = {
    display: 'block',
    backgroundColor: '#e9ecef',
    color: '#6c757d',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 'normal',
    overflow: 'hidden',
  };

  if (type === 'side') {
    adStyle.width = '150px';
    adStyle.height = '600px';
    adStyle.margin = '0 20px';
  } else if (type === 'bottom') {
    adStyle.width = '100%';
    adStyle.height = '100px';
    adStyle.marginTop = '20px';
  }

  return (
    <ins
      className="adsbygoogle"
      style={adStyle}
      data-ad-client="ca-pub-YOUR_ADSENSE_PUBLISHER_ID" // 실제 AdSense 게시자 ID로 교체
      data-ad-slot={adSlot} // 실제 AdSense 광고 단위 ID로 교체
      data-ad-format={type === 'bottom' ? 'auto' : 'vertical'}
      data-full-width-responsive={type === 'bottom' ? 'true' : 'false'}
    >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
        광고 ({type})
      </div>
    </ins>
  );
};

export default GoogleAdSenseBanner;