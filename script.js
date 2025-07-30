// ===== Dark Mode Toggle =====
const darkModeToggle = document.getElementById('darkModeToggle');
const htmlElement = document.documentElement;

// Apply dark mode from localStorage if present
if (localStorage.getItem('darkMode') === 'enabled') {
  htmlElement.classList.add('dark-mode');
}

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
  htmlElement.classList.toggle('dark-mode');
  const mode = htmlElement.classList.contains('dark-mode') ? 'enabled' : 'disabled';
  localStorage.setItem('darkMode', mode);
});

// ===== Theme Selector =====
const themeSelector = document.getElementById('themeSelector');

// Apply saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.add(`${savedTheme}-theme`);
  themeSelector.value = savedTheme;
}

// Change theme
themeSelector.addEventListener('change', function () {
  // Remove existing theme classes
  document.body.classList.remove('blue-theme', 'green-theme', 'purple-theme');

  const selectedTheme = themeSelector.value;
  if (selectedTheme !== 'default') {
    document.body.classList.add(`${selectedTheme}-theme`);
  }

  localStorage.setItem('theme', selectedTheme);
});

// ===== Scroll to Top Button =====
const backToTopBtn = document.createElement('button');
backToTopBtn.id = 'backToTop';
backToTopBtn.textContent = '⬆';
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== AOS Animation Initialization =====
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});
