// --- Mobile Menu Toggle ---
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// --- Auto Year ---
document.getElementById('year').textContent = new Date().getFullYear();

// --- Dark/Light Mode Toggle ---
const themeBtn = document.querySelector('.toggle-theme');
const themeLabel = document.querySelector('.theme-label');

// Set initial label based on current mode
themeLabel.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');

  // Change icon and label dynamically
  themeBtn.textContent = isDark ? '☀️' : '🌙';
  themeLabel.textContent = isDark ? 'Light Mode' : 'Dark Mode';
});

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