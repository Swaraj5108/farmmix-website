// --- Mobile Menu Toggle ---
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

// Toggle menu when ☰ clicked
menuToggle.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent click from bubbling up
  navLinks.classList.toggle('active');
});

// Close menu when any nav link is clicked
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Close menu when clicking outside of it
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});

// Close menu when scrolling
window.addEventListener('scroll', () => {
  navLinks.classList.remove('active');
});

// --- Auto Year ---
document.getElementById('year').textContent = new Date().getFullYear();

// --- Dark/Light Mode Toggle ---
const themeBtn = document.querySelector('.toggle-theme');
const themeLabel = document.querySelector('.theme-label');

// Function to toggle theme
function toggleTheme() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');

  // Update icon and label
  themeBtn.textContent = isDark ? '☀️' : '🌙';
  themeLabel.textContent = isDark ? 'Light Mode' : 'Dark Mode';
}

// Initialize label based on current mode
themeLabel.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';

// Event listeners for both icon and label
themeBtn.addEventListener('click', toggleTheme);
themeLabel.addEventListener('click', toggleTheme);

// --- Back to Top Button ---
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// --- Active Link Highlight ---
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("nav a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    if (scrollY >= sectionTop) current = section.getAttribute("id");
  });
  navItems.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) a.classList.add("active");
  });
});