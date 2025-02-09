const images = ["01.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];


document.body.style.backgroundImage = `url(imgs/${chosenImage})`;