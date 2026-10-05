(function () {
  "use strict";

  const shelves = window.JARAM_SHELVES || [];
  const holder = document.getElementById("shelves");
  let cardIndex = 0;

  // 묶음 이름은 공책 칸에 한 글자씩
  const squareWord = (word, color) =>
    `<span class="square-word small" style="--ink:${color}" aria-hidden="true">${[...word].map(ch => `<span>${ch}</span>`).join("")}</span>`;

  function cardHtml(game, shelf) {
    const tilt = [-2.2, 1.6, -1, 2.4, -1.8, 1.1][cardIndex % 6];
    const delay = cardIndex++ * 45;
    const style = `--tilt:${tilt}deg;--tape:${shelf.tape};--ink:${shelf.color};--delay:${delay}ms`;
    const cover = game.cover
      ? `<img src="./assets/covers/${game.cover}.webp" width="640" height="480" alt="" loading="lazy" />`
      : `<span class="cover-empty" aria-hidden="true">✨</span>`;
    const inner = `<span class="tape" aria-hidden="true"></span>
        <span class="photo">${cover}</span>
        <span class="game-name">${game.name}</span>
        <span class="game-line">${game.line}</span>`;
    if (!game.url) {
      return `<li><div class="card is-soon" style="${style}" aria-label="${game.name}, 곧 열려요">${inner}<span class="soon-badge">곧 열려요</span></div></li>`;
    }
    return `<li><a class="card" style="${style}" href="${game.url}">${inner}<span class="play" aria-hidden="true">▶</span></a></li>`;
  }

  holder.innerHTML = shelves.map(shelf => {
    const open = shelf.games.filter(game => game.url).length;
    return `<section class="shelf" style="--ink:${shelf.color}" aria-labelledby="shelf-${shelf.id}">
      <h2 id="shelf-${shelf.id}"><span class="visually-hidden">${shelf.name}</span>${squareWord(shelf.name, shelf.color)}<span class="count">게임 ${open}개</span></h2>
      <ul class="cards">${shelf.games.map(game => cardHtml(game, shelf)).join("")}</ul>
    </section>`;
  }).join("");

  // 누른 카드가 살짝 눌렸다가 이동 — 아이가 "눌렸다"를 볼 수 있게
  holder.addEventListener("click", event => {
    const card = event.target.closest("a.card");
    if (!card || event.defaultPrevented || event.metaKey || event.ctrlKey) return;
    event.preventDefault();
    card.classList.add("is-going");
    window.setTimeout(() => { window.location.href = card.href; }, 180);
  });
  // 게임에서 뒤로 돌아왔을 때 눌린 모양이 남지 않게
  window.addEventListener("pageshow", () => document.querySelectorAll(".is-going").forEach(card => card.classList.remove("is-going")));

  // ── 새 버전 감지 (패드가 옛 파일을 붙들고 있어도 알 수 있게) ──
  const APP_VERSION = document.querySelector('meta[name="app-version"]').content;
  const updateButton = document.getElementById("updateButton");
  document.getElementById("appVersion").textContent = `v${APP_VERSION}`;
  updateButton.addEventListener("click", () => location.replace(`${location.pathname}?v=${Date.now()}`));
  let lastCheck = 0;
  async function checkUpdate() {
    if (location.protocol === "file:" || !navigator.onLine || Date.now() - lastCheck < 60000) return;
    lastCheck = Date.now();
    try {
      const response = await fetch(`${location.pathname}?v=${Date.now()}`, { cache: "no-store" });
      const latest = (await response.text()).match(/name="app-version" content="([^"]+)"/);
      if (latest && latest[1] !== APP_VERSION) updateButton.hidden = false;
    } catch (_) { /* 연결이 끊겼으면 다음에 */ }
  }
  document.addEventListener("visibilitychange", () => { if (!document.hidden) checkUpdate(); });
  window.addEventListener("online", checkUpdate);
  window.setInterval(checkUpdate, 600000);
  checkUpdate();
})();
