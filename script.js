// Search handler
document.getElementById('searchBtn').onclick = () => {
  const query = document.getElementById('query').value.trim();
  if (!query) return;

  if (/^https?:\/\//i.test(query)) {
    // If it's a full URL, open directly
    window.open(query, "_blank");
  } else {
    // Otherwise, search with chosen engine
    const engine = document.getElementById('engine').value;
    window.open(engine + encodeURIComponent(query), "_blank");
  }
};

// Games Hub
const games = [
  { name: "Snake", file: "snake.html", icon: "🐍" },
  { name: "TicTacToe", file: "tictactoe.html", icon: "⭕" },
  { name: "Pong", file: "pong.html", icon: "🏓" },
  { name: "Flappy Bird", file: "flappy.html", icon: "🐦" },
  { name: "Tetris", file: "tetris.html", icon: "🟦" },
  { name: "Minesweeper", file: "minesweeper.html", icon: "💣" },
  { name: "Breakout", file: "breakout.html", icon: "🧱" }
];

const gamesList = document.getElementById('gamesList');
games.forEach(g => {
  const card = document.createElement('div');
  card.className = "game-card";
  card.innerHTML = `<div class="icon">${g.icon}</div><div>${g.name}</div>`;
  card.onclick = () => window.open(`games/${g.file}`, "_blank");
  gamesList.appendChild(card);
});
