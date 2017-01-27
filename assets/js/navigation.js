window.addEventListener('scroll', () => {
  const scroll = document.body.scrollTop;
  const heightWindow = window.innerHeight;

  if (scroll >= heightWindow) {
    document.getElementById('nav').className = 'navigation scroll';
  } else {
    document.getElementById('nav').className = 'navigation';
  }
});
