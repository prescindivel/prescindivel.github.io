window.addEventListener('scroll', () => {
  const scroll = document.body.scrollTop,
        heightWindow = window.innerHeight - 80;

  if (scroll >= heightWindow) {
    document.getElementById('nav').className = 'navigation scroll';
  } else {
    document.getElementById('nav').className = 'navigation';
  }
});
