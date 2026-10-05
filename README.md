# 자람랩

지온이(초1)가 하는 학습 게임을 한곳에 모은 패드용 놀이 공책입니다.
https://ian939.github.io/jaramlab/

- 묶음: 포켓몬 · 한글 · 세계탐험 — 목록은 `js/games.js` 한 곳에서 고칩니다 (`url`이 비어 있으면 "곧 열려요" 카드).
- 표지 그림: 각 게임 첫 화면을 찍어 자른 것 (`assets/covers/<저장소이름>.webp`, 640×480).
- 패드 확대·복사 잠금(`js/lock.js` + `style.css` 맨 위), 버전 표시와 새 버전 감지(`<meta name="app-version">`).
- 배포할 때 `index.html`의 `app-version`과 `?v=` 값을 함께 올립니다.
- 빌드 없음. `main` 브랜치 루트가 그대로 GitHub Pages로 나갑니다.
