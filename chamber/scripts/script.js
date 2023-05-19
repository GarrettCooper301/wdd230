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
