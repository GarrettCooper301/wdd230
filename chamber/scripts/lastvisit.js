const visits = document.getElementById("visits");
let lastVisit = Number(window.localStorage.getItem("visit-date"));
let today = Date.now()
let difference = (today - lastVisit);
let time = (difference / 86,400,000)
rounded = Math.ceil(time)
localStorage.setItem("lastVisit", today);
visits.textContent = rounded;