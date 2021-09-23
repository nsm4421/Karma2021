선수들 = [{'선수명' : '페이커', '나이' : 26},
    {'선수명' : '쇼메이커', '나이' : 21},
    {'선수명' : '케리아', '나이' : 18}];

const 성인선수나이평균 = 선수들
    .filter(선수=>선수.나이>=20)
    .map(선수=>선수.나이)
    .reduce((이전,현재, 인덱스, 배열) => (이전+현재/배열.length), 0);

console.log(`선수들 나이 평균 : ${성인선수나이평균}`);

