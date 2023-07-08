const timeDisplay = document.querySelector("#Display");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let intervalId;
let Stop = true;

startBtn.addEventListener("click", () => {
  if (Stop) {
    Stop = false;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 1000);
  }
});

stopBtn.addEventListener("click", () => {
  if (!Stop) {
    Stop = true;
    elapsedTime = Date.now() - startTime;
    clearInterval(intervalId);
  }
});

resetBtn.addEventListener("click", () => {
  Stop = true;
  clearInterval(intervalId);
  startTime = 0;
  elapsedTime = 0;
  timeDisplay.textContent = "00:00:00";
});

function updateTime() {
  elapsedTime = Date.now() - startTime;

  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

  const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  timeDisplay.textContent = formattedTime;
}

function pad(unit) {
  return unit.toString().padStart(2, "0");
}

