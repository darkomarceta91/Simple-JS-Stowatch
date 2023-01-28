"use strict";
let seconds = 0;
let miliseconds = 0;

const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const resetButton = document.querySelector(".reset");
const timer = document.querySelector(".timer");
let intervalID;
const timerMiliSeconds = () => {
  miliseconds++;
  if (miliseconds % 100 === 0) {
    seconds++;
  }
  timer.innerHTML = `${seconds}:${(miliseconds % 100)
    .toString()
    .padStart(2, "0")}`;
};

const startButtonHandler = () => {
  intervalID = setInterval(timerMiliSeconds, 10);
};
const stopButtonHandler = () => {
  clearInterval(intervalID);
};

const resetButtonHandler = () => {
  clearInterval(intervalID);
  timer.innerHTML = "00:00";
};
startButton.addEventListener("click", startButtonHandler);
stopButton.addEventListener("click", stopButtonHandler);
resetButton.addEventListener("click", resetButtonHandler);
