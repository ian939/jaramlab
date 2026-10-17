// 자람랩에 모으는 게임 — 묶음 순서와 게임 순서가 화면 순서다.
// url 이 없는 게임은 "곧 열려요"로 보이고 누를 수 없다.
window.JARAM_SHELVES = [
  {
    id: "pokemon", name: "포켓몬", color: "#e8402e", tape: "#ffcf33",
    games: [
      { name: "포켓몬 도감 퀴즈", line: "단서를 읽고 포켓몬 이름 맞히기", cover: "poketmon-quiz", url: "https://ian939.github.io/poketmon-quiz/" },
      { name: "포켓몬 윷놀이", line: "포켓몬이 말이 되는 가족 윷놀이", cover: "pokemon-yut", url: "https://ian939.github.io/pokemon-yut/" },
      { name: "포켓몬 사다리 대모험", line: "사다리 타고 로켓단 피해 수학·영어 퀴즈", cover: "pokemon-ladder", url: "https://ian939.github.io/pokemon-ladder/" },
      { name: "로켓단 폭탄 돌리기", line: "넷이 둘러앉아 푸는 숫자 퀴즈", cover: "rocket-bomb", url: "https://ian939.github.io/rocket-bomb/" },
      { name: "포켓몬 미스터리 구조대", line: "살펴보고 생각해서 사건 풀기", cover: "pokemon-mystery-rescue", url: "https://ian939.github.io/pokemon-mystery-rescue/" },
      { name: "잉글리시몬", line: "영어 단어 맞히고 포켓몬 모으기", cover: "english-mon", url: "https://ian939.github.io/english-mon/" }
    ]
  },
  {
    id: "hangul", name: "한글", color: "#169b6b", tape: "#9fe3c0",
    games: [
      { name: "아이야 한글놀이", line: "받침 있는 글자 익히기", cover: "hangeulaiya", url: "https://ian939.github.io/hangeulaiya/" },
      { name: "한글용사 낱말퀴즈", line: "낱말을 맞히며 한글 용사 되기", cover: "hangul-hero-quiz", url: "https://ian939.github.io/hangul-hero-quiz/" },
      { name: "냠냠쩝쩝", line: "냠냠이·뇸뇸이·쩝쩝이 키우며 놀기", cover: "wordgame", url: "https://ian939.github.io/wordgame/" },
      { name: "모리의 책숲", line: "책 읽고 퀴즈 풀어 숲 키우기", cover: "mori-reading-pad", url: "https://ian939.github.io/mori-reading-pad/" },
      { name: "별빛 숲의 비밀", line: "읽으면서 떠나는 별빛 모험", cover: "", url: "" }
    ]
  },
  {
    id: "world", name: "세계탐험", color: "#2f6fd6", tape: "#a9cdfb",
    games: [
      { name: "빙글빙글 세계탐험대", line: "지구본을 돌려 나라 찾기", cover: "world-explorer", url: "https://ian939.github.io/world-explorer/" }
    ]
  }
];
