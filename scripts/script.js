const lastModifiedSpan = document.getElementById("last-modified");
const file = new File([""], "index.html");
const lastModified = new Date(file.lastModified).toLocaleString();
lastModifiedSpan.textContent = "Last modified: " + lastModified;
