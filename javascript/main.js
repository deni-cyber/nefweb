
//opening the sidebar
const toggleBtn = document.getElementById('navToggle');
const sideNav = document.getElementById('sideNav');

toggleBtn.addEventListener('click', () => {
  sideNav.classList.toggle('open');
  toggleBtn.classList.toggle('open'); // this line toggles the cross
});

document.addEventListener('click', (e) => {
  if (!sideNav.contains(e.target) && !toggleBtn.contains(e.target)) {
    sideNav.classList.remove('open');
    toggleBtn.classList.remove('open'); // reset back to hamburger
  }
});





//hidding the logo in small scrins when the scroll starts
window.addEventListener("scroll", function () {
    const logo = document.getElementById("logo");
    if (window.scrollY > 50) {
    logo.classList.add("hidden");
    } else {
    logo.classList.remove("hidden");
    }
});


// changing background
document.addEventListener("DOMContentLoaded", function () {
  const intro = document.querySelector(".intro-section");
  const images = [
    "staticimages/metalbending.jpg",
    "staticimages/metalcutting.jpg",
    "staticimages/weld.jpg",
  ];

  let i = 0;

  function changeBackground() {
    intro.style.backgroundImage = `url('${images[i]}')`;
    i = (i + 1) % images.length;
  }

  // Initial load
  changeBackground();

  // Change every 5 seconds
  setInterval(changeBackground, 5000);
});

//sending message via whatsapp
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Replace with your WhatsApp number (with country code, no + or spaces)
  const phone = "+2547 21394475";

  const text = `Hello, my name is ${name} (%20${email}%20), and am reaching out from your website.Message: %0A${message}`;
  const url = `https://wa.me/${phone}?text=${text}`;

  window.open(url, "_blank");
});



//animation script for the corousels
document.querySelectorAll('.carousel').forEach(carousel => {
const slides = carousel.querySelector('.slides');
const images = carousel.querySelectorAll('.slides img');
const prev = carousel.querySelector('.prev');
const next = carousel.querySelector('.next');
const dotsContainer = carousel.querySelector('.dots');
let index = 0;

// Create dots dynamically based on image count
images.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);

    dot.addEventListener('click', () => showSlide(i));
});

const dots = dotsContainer.querySelectorAll('.dot');

function showSlide(i) {
    if (i < 0) index = images.length - 1;
    else if (i >= images.length) index = 0;
    else index = i;

    slides.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

prev.addEventListener('click', () => showSlide(index - 1));
next.addEventListener('click', () => showSlide(index + 1));

// Auto-play with pause on hover
let autoplay = setInterval(() => showSlide(index + 1), 4000);

carousel.addEventListener('mouseenter', () => clearInterval(autoplay));
carousel.addEventListener('mouseleave', () => {
    autoplay = setInterval(() => showSlide(index + 1), 4000);
});
});



const text = "Experts in Fabrication & Engineering Solutions";
const element = document.getElementById("text");
let index = 0;

function type() {
  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(type, 50);
  }
}

type();

