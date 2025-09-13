// show/hide sections
function showSection(id) {
  document.querySelectorAll("main section").forEach(sec => sec.style.display = "none");
  document.getElementById(id).style.display = "block";
}

// Search handler
document.getElementById('searchBtn').onclick = () => {
  const query = document.getElementById('query').value.trim();
  if (!query) return;
  if (/^https?:\/\//i.test(query)) window.open(query, "_blank");
  else {
    const engine = document.getElementById('engine').value;
    window.open(engine + encodeURIComponent(query), "_blank");
  }
};

// Games list + iframe loader
const games = [
  { name: "Snake", file: "snake.html", icon: "🐍" },
  { name: "TicTacToe", file: "tictactoe.html", icon: "⭕" },
  { name: "Pong", file: "pong.html", icon: "🏓" },
  { name: "Tetris", file: "tetris.html", icon: "🟦" }
];

const gamesList = document.getElementById('gamesList');
const gameFrameWrapper = document.getElementById('gameFrameWrapper');
const gameFrame = document.getElementById('gameFrame');

games.forEach(g => {
  const card = document.createElement('div');
  card.className = "game-card";
  card.innerHTML = `<div class="icon">${g.icon}</div><div>${g.name}</div>`;
  card.onclick = () => {
    gameFrameWrapper.style.display = "block";
    gameFrame.src = `games/${g.file}`;
    // smooth scroll to game iframe
    setTimeout(()=> window.scrollTo({ top: gameFrameWrapper.offsetTop - 60, behavior: "smooth" }), 60);
  };
  gamesList.appendChild(card);
});
