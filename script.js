function showScreen(id) {
  document.querySelectorAll('.screen').forEach((screen) => {
    screen.classList.remove('active');
  });

  const selected = document.getElementById(id);
  if (selected) {
    selected.classList.add('active');
  }
}
