const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

fetch(url)
  .then(response => response.json())
  .then(jsonObject => {
    const prophets = jsonObject.prophets;

    prophets.forEach(prophet => {
      const { name, lastname, imageurl, birthdate, birthplace } = prophet;

      const card = document.createElement('section');
      const h2 = document.createElement('h2');
      const h3 = document.createElement('h3');
      const p = document.createElement('p');
      const image = document.createElement('img');

      h2.textContent = `${name} ${lastname}`;
      image.src = imageurl;
      image.alt = `The official portrait of ${name} ${lastname}`;
      h3.textContent = `Date of Birth: ${birthdate}`;
      p.textContent = `Place of Birth: ${birthplace}`;

      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(p);
      card.appendChild(image);

      document.querySelector('div.cards').appendChild(card);
    });
  });
