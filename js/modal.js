// Get elements
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('contactModal');
const closeModalBtn = document.querySelector('.close');

// Open modal on button click
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Close modal on X click
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal if clicking outside the content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
