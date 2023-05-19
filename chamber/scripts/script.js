let text = document.lastModified;
document.getElementById("last-modified").innerHTML = text;


 const datefield = document.querySelector("time");
 const datemessage = document.querySelector("p");


 const now = new Date();
 const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

 datefield.textContent = fulldate; 

 //const hamburgerButton = document.getElementById("hamburgerButton");
 //const nav = document.querySelector("nav");
 
 //hamburgerButton.addEventListener("click", () => {
   //nav.classList.toggle("show-menu");
 //});
 
 window.addEventListener('DOMContentLoaded', function() {
    var today = new Date();
    var dayOfWeek = today.getDay();

    if (dayOfWeek === 1 || dayOfWeek === 2) {
        var banner = document.getElementById('banner');
        banner.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
        banner.style.display = 'block';
    }
});
