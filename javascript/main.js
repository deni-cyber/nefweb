
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