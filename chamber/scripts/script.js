let text = document.lastModified;
document.getElementById("last-modified").innerHTML = text;


 const datefield = document.querySelector("time");
 const datemessage = document.querySelector("p");


 const now = new Date();
 const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

 datefield.textContent = fulldate; 


