function openModal() {
  const modal = document.getElementById('teamModal');
  const backdrop = document.getElementById('modalBackdrop');
  modal.style.display = 'block';
  backdrop.style.display = 'block';
  setTimeout(() => {
    modal.classList.add('show');
  }, 10);

  document.addEventListener('keydown', handleEscClose);
}

function closeModal() {
  const modal = document.getElementById('teamModal');
  modal.classList.remove('show');
  setTimeout(() => {
    modal.style.display = 'none';
    document.getElementById('modalBackdrop').style.display = 'none';
  }, 300);

  document.removeEventListener('keydown', handleEscClose);
}

function handleEscClose(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}
