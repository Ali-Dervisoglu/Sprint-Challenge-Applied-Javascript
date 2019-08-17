/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createCarousel() {
  let carouselDiv = document.createElement("div");
  carouselDiv.classList.add("carousel");
  let leftButton = document.createElement("div");
  leftButton.classList.add("left-button");
  const img1 = document.createElement('img');
  img1.src = "./assets/carousel/mountains.jpeg";
  const img2 = document.createElement('img'); 
  img2.src = "./assets/carousel/computer.jpeg";
  const img3 = document.createElement('img');
  img3.src = "./assets/carousel/trees.jpeg";
  const img4 = document.createElement('img');
  img4.src = "./assets/carousel/turntable.jpeg";
  let rightButton = document.createElement("div");
  rightButton.classList.add("right-button");

  let imagesArray = [];
  imagesArray.push(img1);
  imagesArray.push(img2);
  imagesArray.push(img3);
  imagesArray.push(img4);

  leftButton.addEventListener('click', () => {
    let currentImage = 0;
    for (i=0; i<4; i++){
      if (imagesArray[i].style.display == "block"){
        currentImage = i;
      }
    }
    imagesArray[currentImage].style.display = "none";
    currentImage =  ((currentImage +3)%4);
    imagesArray[currentImage].style.display = "block";
    
  })

  rightButton.addEventListener('click', () => {
    let currentImage = 0;
    for (i=0; i<4; i++){
      if (imagesArray[i].style.display == "block"){
        currentImage = i;
      }
    }
    imagesArray[currentImage].style.display = "none";
    currentImage =  ((currentImage +1)%4);
    imagesArray[currentImage].style.display = "block";
    
  })

  img1.style.display = "block";
  carouselDiv.appendChild(leftButton);
  carouselDiv.appendChild(img1);
  carouselDiv.appendChild(img2);
  carouselDiv.appendChild(img3);
  carouselDiv.appendChild(img4);
  carouselDiv.appendChild(rightButton);

  return carouselDiv;
}

let carouselContainer = document.querySelector(".carousel-container");
carouselContainer.appendChild(createCarousel());