import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { results } from '../data';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { mbti } = location.state || {};

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init('YOUR_KAKAO_APP_KEY'); // 여기에 본인의 JavaScript 앱 키를 입력하세요
    }
  }, []);

  const handleKakaoShare = () => {
    if (window.Kakao) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: `나의 강아지 MBTI는 ${mbti} (${results[mbti].name})!`, // 결과에 따라 동적으로 제목 변경
          description: results[mbti].description, // 결과에 따라 동적으로 설명 변경
          imageUrl:
            'https://via.placeholder.com/300', // 실제 이미지 URL로 변경 필요
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '테스트하러 가기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    }
  };

  if (!mbti || !results[mbti]) {
    return (
      <div className="text-center">
        <h2 className="fw-bold">결과를 찾을 수 없습니다.</h2>
        <p className="lead text-muted my-4">테스트를 다시 시작해주세요.</p>
        <button className="btn btn-primary btn-lg" onClick={() => navigate('/')}>
          홈으로 돌아가기
        </button>
      </div>
    );
  }

  const { name, description, image } = results[mbti];

  return (
    <div className="text-center">
      <h2 className="fw-bold">당신의 강아지 유형은?</h2>
      <h1 className="display-4 fw-bold text-warning my-3">{mbti}</h1>
      <h3 className="mb-4">{name}</h3>
      <img src={image} alt={name} className="img-fluid rounded-3 shadow-sm my-4" style={{ maxWidth: '300px' }} />
      <p className="lead my-4">{description}</p>
      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-warning btn-lg me-2" onClick={() => navigate('/')}>
          다시 테스트하기
        </button>
        <button className="btn btn-info btn-lg" onClick={handleKakaoShare}>
          카카오톡으로 공유하기
        </button>
      </div>
    </div>
  );
};

export default Result;
