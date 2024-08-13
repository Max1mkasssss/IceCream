function openModal() {
  const modal = document.getElementById('teamModal');
  const backdrop = document.getElementById('modalBackdrop');
  modal.style.display = 'block';
  backdrop.style.display = 'block';
  setTimeout(() => {
      modal.classList.add('show');
  }, 10);
}

function closeModal() {
  const modal = document.getElementById('teamModal');
  modal.classList.remove('show');
  setTimeout(() => {
      modal.style.display = 'none';
      document.getElementById('modalBackdrop').style.display = 'none';
  }, 300);
}