// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Smooth scroll
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
  e.preventDefault();

  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);

  window.scrollTo({
    top: targetElement.offsetTop,
    behavior: 'smooth'
  });

  // Close the mobile menu if it's open
  navMenu.classList.remove('active');
}
function smoothScroll(event) {
    event.preventDefault(); // Prevent default anchor behavior
  
    const targetId = event.target.getAttribute("href"); // Get the target ID from the href attribute
    const targetElement = document.querySelector(targetId); // Find the target element
  
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop, // Scroll to the top position of the target element
        behavior: "smooth" // Use smooth scrolling behavior
      });
    }
  }
  