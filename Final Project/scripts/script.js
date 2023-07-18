document.addEventListener('DOMContentLoaded', function () {
    const fruitSelect1 = document.getElementById('fruit1');
    const fruitSelect2 = document.getElementById('fruit2');
    const fruitSelect3 = document.getElementById('fruit3');
  
    const request = new XMLHttpRequest();
    request.open('GET', 'https://brotherblazzard.github.io/canvas-content/fruit.json', true);
    request.onload = function () {
      if (request.status === 200) {
        const data = JSON.parse(request.responseText);
  
        data.forEach(fruit => {
          const option1 = document.createElement('option');
          option1.value = fruit.id;
          option1.textContent = fruit.name;
          fruitSelect1.appendChild(option1);
  
          const option2 = document.createElement('option');
          option2.value = fruit.id;
          option2.textContent = fruit.name;
          fruitSelect2.appendChild(option2);
  
          const option3 = document.createElement('option');
          option3.value = fruit.id;
          option3.textContent = fruit.name;
          fruitSelect3.appendChild(option3);
        });
  
        // Handle form submission
        const form = document.getElementById('drink-form');
        form.addEventListener('submit', function (event) {
          event.preventDefault();
  
          // Get the selected fruit IDs
          const fruitId1 = parseInt(document.getElementById('fruit1').value);
          const fruitId2 = parseInt(document.getElementById('fruit2').value);
          const fruitId3 = parseInt(document.getElementById('fruit3').value);
  
          // Filter the selected fruits from the data
          const selectedFruits = data.filter(fruit => [fruitId1, fruitId2, fruitId3].includes(fruit.id));
  
          // Calculate the total nutrition
          let totalCarbohydrates = 0;
          let totalProtein = 0;
          let totalFat = 0;
          let totalSugar = 0;
          let totalCalories = 0;
  
          selectedFruits.forEach(fruit => {
            totalCarbohydrates += fruit.nutritions.carbohydrates;
            totalProtein += fruit.nutritions.protein;
            totalFat += fruit.nutritions.fat;
            totalSugar += fruit.nutritions.sugar;
            totalCalories += fruit.nutritions.calories;
          });
  
          // Get the form field values
          const firstName = document.getElementById('first-name').value;
          const email = document.getElementById('email').value;
          const phone = document.getElementById('phone').value;
          const instructions = document.getElementById('special-instructions').value;
  
          // Format the output
          const output = `
            <p><strong>Order Details:</strong></p>
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <p><strong>Selected Fruits:</strong> ${selectedFruits.map(fruit => fruit.name).join(', ')}</p>
            <p><strong>Special Instructions:</strong> ${instructions}</p>
            <p><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
            <p><strong>Total Nutrition:</strong></p>
            <ul>
              <li>Carbohydrates: ${totalCarbohydrates.toFixed(2)} g</li>
              <li>Protein: ${totalProtein.toFixed(2)} g</li>
              <li>Fat: ${totalFat.toFixed(2)} g</li>
              <li>Sugar: ${totalSugar.toFixed(2)} g</li>
              <li>Calories: ${totalCalories}</li>
            </ul>
          `;
  
          // Display the output
          const outputContainer = document.getElementById('output');
          outputContainer.innerHTML = output;
  
          // Reset the form fields
          form.reset();

          // Update the drink count in the information card
        const drinkCount = parseInt(localStorage.getItem('drinkCount')) || 0;
        localStorage.setItem('drinkCount', (drinkCount + 1).toString());
        updateDrinkCountCard();
        });
      } else {
        console.error('Error:', request.statusText);
      }
    };
    request.onerror = function () {
      console.error('Request failed');
    };
    request.send();

    // Function to update the drink count information card
  function updateDrinkCountCard() {
    const drinkCountCard = document.getElementById('drink-count-card');
    const drinkCount = parseInt(localStorage.getItem('drinkCount')) || 0;
    drinkCountCard.textContent = `Total Specialty Drinks: ${drinkCount}`;
  }

  // Update the drink count card on page load
  updateDrinkCountCard();
});
 
  
    
  let text = document.lastModified;
  document.getElementById("last-modified").innerHTML = text;
  
  
   const datefield = document.querySelector("time");
   const datemessage = document.querySelector("p");
  
  
   const now = new Date();
   const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
  
   datefield.textContent = fulldate; 