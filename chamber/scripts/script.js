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
  function setFormLoadedDate() {
    var formLoadedDateField = document.getElementById("form-loaded-date");
    var currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
    formLoadedDateField.value = currentDate;
  }
});

fetch('json/data.json')
  .then(response => response.json())
  .then(data => {
    const directoryContainer = document.getElementById('directory-container');
    const businesses = data.businesses;

    businesses.forEach(business => {
      const { name, address, phone, website, logo, membership } = business;

      const card = document.createElement('div');
      card.classList.add('business-card');

      const logoImg = document.createElement('img');
      logoImg.src = `images/${logo}`;
      logoImg.alt = `${name} Logo`;

      const heading = document.createElement('h2');
      heading.textContent = name;

      const addressPara = document.createElement('p');
      addressPara.innerHTML = `<strong>Address:</strong> ${address}`;

      const phonePara = document.createElement('p');
      phonePara.innerHTML = `<strong>Phone:</strong> ${phone}`;

      const websitePara = document.createElement('p');
      websitePara.innerHTML = `<strong>Website:</strong> <a href="${website}" target="_blank">${website}</a>`;

      const membershipPara = document.createElement('p');
      membershipPara.innerHTML = `<strong>Membership:</strong> ${membership}`;

      card.appendChild(logoImg);
      card.appendChild(heading);
      card.appendChild(addressPara);
      card.appendChild(phonePara);
      card.appendChild(websitePara);
      card.appendChild(membershipPara);

      directoryContainer.appendChild(card);
    });
  });
