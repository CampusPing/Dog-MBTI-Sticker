export const questions = [
  {
    question: '산책 중 다른 강아지를 만났을 때, 나는...',
    answers: [
      { text: '먼저 다가가서 인사를 나눈다.', type: 'E' },
      { text: '조용히 상황을 지켜본다.', type: 'I' },
    ],
  },
  {
    question: '새로운 장난감이 생겼을 때, 나는...',
    answers: [
      { text: '장난감의 숨겨진 기능을 탐색한다.', type: 'N' },
      { text: '일단 물고 뜯으며 즐긴다.', type: 'S' },
    ],
  },
  {
    question: '주인이 슬퍼 보일 때, 나는...',
    answers: [
      { text: '곁에 다가가 조용히 위로해준다.', type: 'F' },
      { text: '장난을 걸어 기분을 풀어주려 한다.', type: 'T' },
    ],
  },
  {
    question: '간식을 먹을 때, 나는...',
    answers: [
      { text: '주어진 간식을 바로 먹는다.', type: 'J' },
      { text: '숨겨두고 나중에 먹는다.', type: 'P' },
    ],
  },
  {
    question: '낯선 사람이 집에 방문했을 때, 나는...',
    answers: [
      { text: '꼬리를 흔들며 반갑게 맞이한다.', type: 'E' },
      { text: '경계하며 거리를 둔다.', type: 'I' },
    ],
  },
  {
    question: '주인이 새로운 기술을 가르쳐줄 때, 나는...',
    answers: [
      { text: '숨겨진 의도를 파악하려고 노력한다.', type: 'N' },
      { text: '간식을 받기 위해 일단 따라한다.', type: 'S' },
    ],
  },
  {
    question: '다른 강아지가 내 밥을 뺏어 먹으려 할 때, 나는...',
    answers: [
      { text: '화를 내기보다 조용히 자리를 피한다.', type: 'F' },
      { text: '으르렁거리며 내 밥을 지킨다.', type: 'T' },
    ],
  },
  {
    question: '잠자리를 정할 때, 나는...',
    answers: [
      { text: '항상 정해진 곳에서 잠을 잔다.', type: 'J' },
      { text: '매일 다른 곳에서 잠드는 것을 즐긴다.', type: 'P' },
    ],
  },
  {
    question: '여러 마리의 강아지들과 함께 있을 때, 나는...',
    answers: [
      { text: '주도적으로 놀이를 이끈다.', type: 'E' },
      { text: '혼자 조용히 탐색하는 것을 즐긴다.', type: 'I' },
    ],
  },
  {
    question: '주인이 외출 준비를 할 때, 나는...',
    answers: [
      { text: '산책 갈 생각에 설레하며 기대한다.', type: 'N' },
      { text: '현관문 앞에서 실제로 나갈 때까지 기다린다.', type: 'S' },
    ],
  },
  {
    question: '가족 중 한 명이 아플 때, 나는...',
    answers: [
      { text: '걱정스러운 눈빛으로 곁을 지킨다.', type: 'F' },
      { text: '특별한 이유 없이 평소처럼 행동한다.', type: 'T' },
    ],
  },
  {
    question: '하루 일과를 보낼 때, 나는...',
    answers: [
      { text: '정해진 시간에 밥 먹고 산책하는 것을 좋아한다.', type: 'J' },
      { text: '그날의 기분에 따라 자유롭게 행동한다.', type: 'P' },
    ],
  },
];

export const results = {
  ESTP: {
    name: '용감한 모험가',
    description: '활동적이고 에너지가 넘치며, 새로운 경험을 즐기는 강아지입니다. 뛰어난 문제 해결 능력을 가지고 있지만, 때로는 충동적인 모습을 보이기도 합니다.',
    image: '/images/estp.png',
  },
  ESFP: {
    name: '자유로운 영혼의 연예인',
    description: '사교성이 뛰어나고 주변의 관심을 즐기는 강아지입니다. 긍정적이고 활발한 성격으로, 주변에 웃음을 선사하는 분위기 메이커입니다.',
    image: '/images/esfp.png',
  },
  ISTP: {
    name: '만능 재주꾼',
    description: '과묵하지만 호기심이 많고, 혼자서도 잘 노는 강아지입니다. 관찰력이 뛰어나고, 도구를 사용하거나 새로운 기술을 배우는 데 재능을 보입니다.',
    image: '/images/istp.png',
  },
  ISFP: {
    name: '호기심 많은 예술가',
    description: '온화하고 다정한 성격으로, 주인과의 교감을 중요하게 생각하는 강아지입니다. 아름다운 것을 좋아하고, 섬세한 감수성을 가지고 있습니다.',
    image: '/images/isfp.png',
  },
  ESTJ: {
    name: '타고난 리더',
    description: '책임감이 강하고 규칙을 잘 지키는 강아지입니다. 가족을 보호하려는 본능이 강하며, 훈련을 통해 뛰어난 능력을 발휘합니다.',
    image: '/images/estj.png',
  },
  ESFJ: {
    name: '친선도모형',
    description: '사람을 잘 따르고, 주변의 모든 사람과 잘 지내고 싶어하는 강아지입니다. 주인의 기분을 잘 살피고, 칭찬받는 것을 매우 좋아합니다.',
    image: '/images/esfj.png',
  },
  ISTJ: {
    name: '세상의 소금형',
    description: '신중하고 책임감이 강하며, 한번 맡은 임무는 끝까지 완수하는 강아지입니다. 조용하고 예측 가능한 환경을 선호합니다.',
    image: '/images/istj.png',
  },
  ISFJ: {
    name: '용감한 수호자',
    description: '주인에 대한 충성심이 매우 강하고, 가족을 보호하려는 마음이 깊은 강아지입니다. 다정하고 헌신적인 성격으로, 최고의 반려견이 될 수 있습니다.',
    image: '/images/isfj.png',
  },
  ENTP: {
    name: '뜨거운 논쟁을 즐기는 변론가',
    description: '지능이 높고 호기심이 많아, 항상 새로운 자극을 찾아다니는 강아지입니다. 때로는 장난기 넘치는 모습으로 주인을 시험에 들게 하기도 합니다.',
    image: '/images/entp.png',
  },
  ENTJ: {
    name: '대담한 통솔자',
    description: '자신감이 넘치고, 무리를 이끄는 것을 좋아하는 강아지입니다. 목표 지향적이며, 원하는 것을 얻기 위해 적극적으로 행동합니다.',
    image: '/images/entj.png',
  },
  INTP: {
    name: '논리적인 사색가',
    description: '독립적이고 지적인 강아지로, 혼자만의 시간을 즐기는 경향이 있습니다. 복잡한 문제에 흥미를 느끼고, 창의적인 해결책을 찾아냅니다.',
    image: '/images/intp.png',
  },
  INTJ: {
    name: '용의주도한 전략가',
    description: '통찰력이 뛰어나고, 장기적인 계획을 세우는 것을 좋아하는 강아지입니다. 독립심이 강하고, 자신의 생각과 판단을 신뢰합니다.',
    image: '/images/intj.png',
  },
  ENFP: {
    name: '재기발랄한 활동가',
    description: '열정적이고 상상력이 풍부하며, 사람들과 어울리는 것을 좋아하는 강아지입니다. 항상 새로운 아이디어를 가지고 있으며, 긍정적인 에너지를 발산합니다.',
    image: '/images/enfp.png',
  },
  ENFJ: {
    name: '정의로운 사회운동가',
    description: '카리스마와 리더십을 겸비하고 있으며, 다른 강아지나 사람들을 돕는 것을 좋아하는 강아지입니다. 주변의 필요를 잘 파악하고, 조화로운 관계를 중요하게 생각합니다.',
    image: '/images/enfj.png',
  },
  INFP: {
    name: '열정적인 중재자',
    description: '섬세하고 이상적인 성격으로, 깊은 유대감을 중요하게 생각하는 강아지입니다. 조용하고 온화하지만, 자신의 가치관을 지키기 위해 강한 의지를 보입니다.',
    image: '/images/infp.png',
  },
  INFJ: {
    name: '선의의 옹호자',
    description: '통찰력이 있고, 다른 사람의 감정을 깊이 이해하는 강아지입니다. 조용하고 신비로운 분위기를 풍기지만, 주인에 대한 강한 애정을 가지고 있습니다.',
    image: '/images/infj.png',
  },
};