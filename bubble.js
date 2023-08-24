var timer = 60;
var rn = 0;
var score = 0;

function MakeBubble() {
  let clutter = "";

  for (var i = 1; i <= 133; i++) {
    const randomNumber = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randomNumber}</div>`;
  }
  document.querySelector(".pbot").innerHTML = clutter;
}

function runTimer() {
  var timerInterval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(timerInterval);
      document.querySelector("#pbot").innerHTML = `<h1>Game over and your score is ${score} </h1>`;
    }
  }, 1000);
}

function Hit() {
  rn = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = rn;
}

function Score() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

document.querySelector("#pbot").addEventListener("click", function (details) {
  var clicked = Number(details.target.textContent);
  if (clicked === rn) {
    Score();
    MakeBubble();
    Hit();
  }
});

Hit();

runTimer();

MakeBubble();
