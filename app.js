function countdown() {
  const nowDate = new Date();
  const eventDate = new Date("Jan 1, 2021 00:00:00");

  const now = nowDate.getTime();
  const event = eventDate.getTime();

  const remaining = event - now;

  let sec = Math.floor(remaining / 1000);
  let min = Math.floor(sec / 60);
  let h = Math.floor(min / 60);
  let day = Math.floor(h / 24);

  sec %= 60;
  min %= 60;
  h %= 24;

  document.querySelector(".days").textContent = day;
  document.querySelector(".hours").textContent = h;
  document.querySelector(".minutes").textContent = min;
  document.querySelector(".seconds").textContent = sec;

  setInterval(countdown, 1000);
}
countdown();
