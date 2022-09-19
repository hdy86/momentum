const clock = document.querySelector("#clock h2");
const clockAmPm = document.querySelector("#clock div span:first-child");
const clockSec = document.querySelector("#clock div span:last-child");
const today = document.querySelector("#date");

function getClock() {
  const date = new Date(2022, 09, 13, 24);

  // 시간
  const hour = date.getHours();
  let hoursCalc;
  if (hour > 12) {
    hoursCalc = hour - 12;
  } else {
    hoursCalc = hour;
  }

  const hours = String(hoursCalc).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  if (hour < 12 && hour === 24) {
    clockAmPm.innerText = "AM";
  } else {
    clockAmPm.innerText = "PM";
  }
  clock.innerText = `${hours}:${minutes}`;
  clockSec.innerText = `${seconds}`;

  // 날짜
  const weekArr = ["일", "월", "화", "수", "목", "금", "토"];
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const week = weekArr[date.getDay()];

  today.innerText = `${year}년 ${month + 1}월 ${day}일 ${week}요일`;
}

getClock();
setInterval(getClock, 1000);
