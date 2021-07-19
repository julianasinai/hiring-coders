const countdown = () => {
  const finalDate = new Date("Nov 26, 2021 00:00:00").getTime();
  const now = new Date().getTime();

  const remainTime = finalDate - now;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  let remainDays = Math.floor(remainTime / days);
  let remainHours = Math.floor((remainTime % days) / hours);
  let remainMinutes  = Math.floor((remainTime % hours) / minutes);
  let remainSeconds  = Math.floor((remainTime % minutes) / seconds);

  remainDays = remainDays < 10 ? "0" + remainDays : remainDays;
  remainHours = remainHours < 10 ? "0" + remainHours : remainHours;
  remainMinutes = remainMinutes < 10 ? "0" + remainMinutes : remainMinutes;
  remainSeconds = remainSeconds < 10 ? "0" + remainSeconds : remainSeconds;

  document.getElementById("days").innerHTML = remainDays;
  document.getElementById("hours").innerHTML = remainHours;
  document.getElementById("minutes").innerHTML = remainMinutes;
  document.getElementById("seconds").innerHTML = remainSeconds;
}

setInterval(countdown, 1000);