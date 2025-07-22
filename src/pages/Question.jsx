import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data';

const Question = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({
    E: 0,
    I: 0,
    N: 0,
    S: 0,
    T: 0,
    F: 0,
    P: 0,
    J: 0,
  });
  const navigate = useNavigate();

  const handleAnswer = (type) => {
    setScores((prevScores) => ({
      ...prevScores,
      [type]: prevScores[type] + 1,
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const mbti = getResult(scores);
      navigate('/interstitial-ad', { state: { mbti } });
    }
  };

  const getResult = (scores) => {
    let result = '';
    result += scores.E > scores.I ? 'E' : 'I';
    result += scores.N > scores.S ? 'N' : 'S';
    result += scores.T > scores.F ? 'T' : 'F';
    result += scores.P > scores.J ? 'P' : 'J';
    return result;
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="text-center">
      <div className="progress mb-4">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
          role="progressbar"
          style={{ width: `${progress}%` }}
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div className="card p-4 border-0 shadow-sm">
        <h5 className="card-title mb-4">{questions[currentQuestion].question}</h5>
        <div className="d-grid gap-3">
          {questions[currentQuestion].answers.map((answer, index) => (
            <button
              key={index}
              className="btn btn-outline-warning btn-lg"
              onClick={() => handleAnswer(answer.type)}
            >
              {answer.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;