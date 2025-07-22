import React from 'react';
import { useNavigate } from 'react-router-dom';

const Start = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/question');
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="fw-bold mb-4">🐾 강아지 MBTI 테스트 🐾</h1>
      <p className="lead mb-4">나와 가장 잘 맞는 강아지 유형은 무엇일까요?</p>
      <button className="btn btn-warning btn-lg" onClick={handleClick}>
        시작하기
      </button>
    </div>
  );
};

export default Start;