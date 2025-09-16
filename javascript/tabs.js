const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active classes
      tabs.forEach(btn => btn.classList.remove('active'));
      contents.forEach(content => content.classList.remove('active'));

      // Activate clicked tab and corresponding content
      tab.classList.add('active');
      document.getElementById(tab.dataset.tab).classList.add('active');
    });
  });



  function showSection(id) {
    // Hide all sections first
    document.querySelectorAll('.hidden-section').forEach(section => {
      section.classList.remove('visible');
      section.style.display = 'none';
    });

    // Show the selected section
    const target = document.getElementById(id);
    target.style.display = 'block';
    target.classList.add('visible');

    // Smooth scroll into view
    target.scrollIntoView({ behavior: 'smooth' });
  }