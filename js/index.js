window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.classList.add('header-small');
  } else {
    header.classList.remove('header-small');
  }
});