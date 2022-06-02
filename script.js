const newYearString = `1 Jan ${new Date().getFullYear() + 1}`;

setInterval(() => {
  const newYear = new Date(newYearString);
  const today = new Date();

  const diff = (newYear - today) / 1000;

  const sec = Math.floor(diff % 60);
  const min = Math.floor((diff / 60) % 60);
  const hr = Math.floor((diff / 60 / 60) % 60);
  const day = Math.floor(diff / 60 / 60 / 24);
  const month = Math.floor(diff / 60 / 60 / 24 / 30);

  document.querySelector(".months h1").innerText = month;
  document.querySelector(".days h1").innerText = formatTime(day);
  document.querySelector(".hours h1").innerText = formatTime(hr);
  document.querySelector(".minutes h1").innerText = formatTime(min);
  document.querySelector(".seconds h1").innerText = formatTime(sec);

  document.querySelector(".date-cont h1").innerText =
    today.getDate() +
    " / " +
    today.toLocaleString("default", { month: "short" }) +
    " / " +
    today.getFullYear();
}, 1000);

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

const h1 = document.querySelector("header h1");
const text = "Countdown to New Year.";
let index = 0;

setInterval(() => {
  h1.innerText = text.slice(0, index);
  index++;
}, 200);

function createSnow() {
  const countdown = document.getElementById("countdown");
  const div = document.createElement("div");
  const random = Math.random();

  div.classList.add("snow");
  div.style.left = Math.random() * 700 + "px";
  div.style.width = random * 3 + 4 + "px";
  div.style.height = random * 3 + 4 + "px";
  div.style.animationDuration = random * 3 + 2 + "s";

  countdown.appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 5000);
}

setInterval(() => {
  createSnow();
}, 10);
