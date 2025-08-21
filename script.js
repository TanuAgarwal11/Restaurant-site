// Nav Section 
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-bar ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

//Home section
const home = document.querySelector("#home");
const homeHeading = document.querySelector(".home-heading");
const homePara = document.querySelector(".home-para");

const homeImages = [
    "Images/RestroImage1.avif", // always change backslashes \ with forward slashes /
    "Images/RestroImage2.avif",
    "Images/RestroImage3.avif",
    "Images/RestroImage4.avif"
];


const homeTitles = [
    "Classic Everyday Dining",
    "Elegant Indoor Dining",
    "Outdoor Dining",
    "Skyline Rooftop Dining",
];

const homeDescriptions = [
    "A comfortable and welcoming space designed for casual meals with friends and family, where every bite feels like home.",
    "Step into a cozy and refined atmosphere with luxurious interiors, ideal for family gatherings and fine dining experiences.",
    "Enjoy your meal amidst fresh air and natural surroundings, blending great taste with the beauty of nature.",
    "Experience dining under the stars with breathtaking city views, perfect for romantic evenings and special celebrations."
];

let index = 0;

function changeSlide(){
    home.style.backgroundImage = `url(${homeImages[index]})`;
    homeHeading.textContent = homeTitles[index];
    homePara.textContent = homeDescriptions[index];

    // trigger fade animation on text
  document.querySelector(".home-content").style.animation = "none";
  void document.querySelector(".home-content").offsetWidth; // reflow hack
  document.querySelector(".home-content").style.animation = "fadeIn 1s ease-in-out";

    index = (index + 1) % homeImages.length;
}

changeSlide();  // show first slide
setInterval( changeSlide,4000); // change every 5s


// Our Restaurant Section
const roofTopImages = [
    "Images/Rooftop1.jpg",
    "Images/Rooftop2.jpg",
    "Images/Rooftop3.jpg",
    "Images/Rooftop4.jpg"
];

const indoorImages = [
    "Images/Indoor1.jpg",
    "Images/Indoor2.jpg",
    "Images/Indoor3.jpg",
    "Images/Indoor4.jpg"
];

let rooftopIndex = 0;
let indoorIndex = 0;

function changeImages() {
  rooftopIndex = (rooftopIndex + 1) % roofTopImages.length;
  indoorIndex = (indoorIndex + 1) % indoorImages.length;

  document.getElementById("rooftopImage").src = roofTopImages[rooftopIndex];
  document.getElementById("indoorImage").src = indoorImages[indoorIndex];
}

setInterval(changeImages, 5000);

// Buffet Section
// Buffet Images Slideshow
const buffetImages = [
  "Images/Buffet1.webp",
  "Images/Buffet2.jpg",
  "Images/Buffet3.jpg",
  "Images/Buffet4.webp",
  "Images/Buffet5.webp",
  "Images/Buffet6.webp",
  "Images/Buffet7.webp",
  "Images/Buffet8.webp",
];

let buffetIndex = 0;
setInterval(() => {
  buffetIndex = (buffetIndex + 1) % buffetImages.length;
  document.getElementById("buffetImage").src = buffetImages[buffetIndex];
}, 5000);