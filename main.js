// Project : Rock Paper Scissors

const startBtn = document.querySelector(".start");
const gameZone = document.querySelector(".game-zone");
const playerScore = document.querySelector("h1:first-child span");
const computerScore = document.querySelector("h1:nth-child(2) span");
let player = 0;
let computer = 0;
scores();
function scores() {
  playerScore.textContent = player;
  computerScore.textContent = computer;
}
startBtn.addEventListener("click", function () {
  gameZone.style.opacity = "-1";
  setTimeout(function () {
    gameZone.textContent = "";
    gameZone.style.opacity = "1";
    preparing();
  }, 1100);
});
function preparing() {
  const guidText = document.createElement("h1");
  guidText.textContent = "Choose an option";
  gameZone.appendChild(guidText);
  const imgZone = document.createElement("div");
  imgZone.classList.add("img-zone");
  gameZone.appendChild(imgZone);
  const playerImg = document.createElement("img");
  playerImg.src = "/imgs/paper.png";
  imgZone.appendChild(playerImg);
  const computerImg = document.createElement("img");
  computerImg.src = "/imgs/paper.png";
  imgZone.appendChild(computerImg);
  const btnZone = document.createElement("div");
  btnZone.classList.add("btnZone");
  const rockBtn = document.createElement("button");
  const paperBtn = document.createElement("button");
  const scissorsBtn = document.createElement("button");
  rockBtn.textContent = "rock";
  paperBtn.textContent = "paper";
  scissorsBtn.textContent = "scissors";
  btnZone.append(rockBtn, paperBtn, scissorsBtn);
  gameZone.appendChild(btnZone);
  const btns = document.querySelectorAll("button");
  btns.forEach((btn) => {
    btn.addEventListener("click", handleButtonClick);
  });
}
function handleButtonClick(e) {
  const playerChoice = e.target.textContent;
  const playerStateImg = document.querySelector(".img-zone img:nth-child(2)");
  playerStateImg.classList.add("player");
  playerStateImg.src = "./imgs/paper.png";
  const random = Math.floor(Math.random() * 3) + 1;
  const computerChoice =
    random === 1
      ? "rock"
      : random === 2
      ? "paper"
      : random === 3
      ? "scissors"
      : "";
  const computerStateImg = document.querySelector(".img-zone img:first-child");
  computerStateImg.classList.add("computer");
  computerStateImg.src = "./imgs/paper.png";
  computerStateImg.style.animationName = "computer-hand";
  playerStateImg.style.animationName = "player-hand";
  setTimeout(() => {
    computerStateImg.style.animationName = "";
    playerStateImg.style.animationName = "";
    playerStateImg.src = "/imgs/" + computerChoice + ".png";
    computerStateImg.src = "/imgs/" + playerChoice + ".png";
    result(computerChoice, playerChoice);
    console.log("#########\n".repeat(2));
  }, 2000);
}
function result(a, b) {
  const h1 = document.querySelector(".game-zone h1");
  if (a === b) {
    console.log("Result: Draw");
    h1.textContent = "Draw";
  } else if (
    (a === "rock" && b === "scissors") ||
    (a === "paper" && b === "rock") ||
    (a === "scissors" && b === "paper")
  ) {
    console.log("Result: Computer wins");
    computer++;
    h1.textContent = "Computer Wins";
  } else {
    console.log("Result: Player wins");
    player++;
    h1.textContent = "Player Wins";
  }
  console.log(player, computer);
  scores();
}
