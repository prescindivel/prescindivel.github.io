const scrollPosition = 400;

document.querySelector('.arrow').addEventListener('click', (e) => {
  e.preventDefault();

  window.scroll({
    top: scrollPosition,
    left: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', () => {
  if (window.pageYOffset > (scrollPosition - 52)) {
    document.querySelector('.navigation').classList.add('scroll');
  }

  if (window.pageYOffset < (scrollPosition - 52)) {
    document.querySelector('.navigation').classList.remove('scroll');
  }
});
