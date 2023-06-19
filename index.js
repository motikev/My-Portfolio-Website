// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a');

for (let link of navLinks) {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
}

// Form submission handling
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form data
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  // Do something with form data
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);

  // Show success message
  alert('Your message has been sent!');
  form.reset();
});










