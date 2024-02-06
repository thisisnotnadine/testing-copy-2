async function createRandomImagePile() {
    const pileContainer = document.getElementById('imagePile');
    const textContainer = document.getElementById('textContainer');
  
    const trinketImagesResponse = await fetch('/trinkets.json');
    const trinketImagesData = await trinketImagesResponse.json();
    const trinketImages = trinketImagesData.images;
  
    // Shuffle the array of image names
    shuffleArray(trinketImages);
  
    // Display the first 5 images
    for (let i = 0; i < 5; i++) {
      const imgElement = document.createElement('img');
      imgElement.src = `trinkets/${trinketImages[i]}`;
      imgElement.alt = `Trinket ${i + 1}`;
      imgElement.className = 'pileImage';
  
      // Calculate position in a circle
      const angle = (i / 5) * (2 * Math.PI);
      const radius = 120; // Radius of the circle in pixels
      const posX = 150 + radius * Math.cos(angle) - 30; // Adjusted to center images
      const posY = 150 + radius * Math.sin(angle) - 30; // Adjusted to center images
  
      imgElement.style.left = `${posX}px`;
      imgElement.style.top = `${posY}px`;
  
      pileContainer.appendChild(imgElement);
    }
  
    // Display the text and buttons
    textContainer.innerHTML = `
      <p>Your pockets are full. Let's see what you found.</p>
      <button onclick="checkAgain()">Check Again</button>
      <button onclick="goToNextPage()">Next Page</button>
    `;
  }
  
  // Function to reload the page
  function checkAgain() {
    location.reload();
  }
  
  // Function to navigate to the next page
  function goToNextPage() {
    // Replace 'nextPage.html' with the actual URL of your next page
    window.location.href = 'rocks.html';
  }
  
  // Function to shuffle an array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  // Call the function to create the random image pile
  createRandomImagePile();
  