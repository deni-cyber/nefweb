  const toggleBtn = document.getElementById('navToggle');
  const sideNav = document.getElementById('sideNav');

  toggleBtn.addEventListener('click', () => {
    sideNav.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
  if (!sideNav.contains(e.target) && !toggleBtn.contains(e.target)) {
    sideNav.classList.remove('open');
  }
});

  document.addEventListener("DOMContentLoaded", function () {
    const intro = document.querySelector(".intro-section");
    const images = [
      "staticimages/welding.jpg",
      "staticimages/metalcutting.jpg",
      "staticimages/metalbending.jpg",
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
