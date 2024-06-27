function solution(N, arr) {
    const Character = {
        마블: ["아이언맨", "토르", "헐크", "블랙위도우", "캡틴아메리카", "캡틴마블", "호크아이", "그루트", "비전", "스칼렛위치"],
        짱구: ["신짱구", "신짱아", "봉미선", "흰둥이", "신영식", "김철수", "한유리", "맹구", "한수지", "채성아"],
        둘리: ["둘리", "도우너", "또치", "마이콜", "고길동", "김박사", "매머드", "램프노인", "공실이"],
        뽀로로: ["뽀로로", "크롱", "에디", "로디", "루피", "패티", "포비", "해리", "뽀뽀", "퉁퉁이"],
    };

    const count = [
        { key: "둘리", count: 0 },
        { key: "마블", count: 0 },
        { key: "미분류", count: 0 },
        { key: "뽀로로", count: 0 },
        { key: "짱구", count: 0 },
    ];

    arr.forEach((character) => {
        let isClassified = false;
        for (const [key, value] of Object.entries(Character)) {
            if (value.includes(character)) {
                count[count.findIndex((k) => k.key === key)].count++;
                isClassified = true;
            }
        }
        if (!isClassified) count[2].count++;
    });

    count.sort((e1, e2) => {
        const diff = e2.count - e1.count;
        if (diff === 0) return e2.key - e1.key;
        else return diff;
    });
    console.log(count.reduce((prev, curr) => (prev += curr.key + "\n"), ""));
}

solution(5, ["뽀로로", "크롱", "신짱구", "맹구", "헐크", "도우너", "흰둥이"]);
