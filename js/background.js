const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("div");

bgImage.style.backgroundImage = `url(../img/${chosenImage})`;

document.getElementById("bg").appendChild(bgImage);
