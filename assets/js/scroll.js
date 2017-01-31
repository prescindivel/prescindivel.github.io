document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener('scroll', () => {
    const scroll       = document.body.scrollTop;
    const heightWindow = window.innerHeight - 80;
    if (scroll >= heightWindow) {
      document.getElementById('nav').className = 'navigation scroll';
    } else {
      document.getElementById('nav').className = 'navigation';
    };

    const isInPage = (node) => {
      return (node === document.body) ? false : document.body.contains(node);
    };

    const title = document.getElementsByClassName('page-title')[0];
    const arrow = document.getElementsByClassName('arrow')[0];
    const bio   = document.getElementsByClassName('bio')[0];
    const date  = document.getElementsByClassName('header-date')[0];

    arrow.style.opacity = 1 - Math.max(scroll/600, 0);

    if (isInPage(date)) {
      date.style.opacity = 1 - Math.max(scroll/600, 0);
    }

    if (isInPage(title)) {
      title.style.transform = 'translate3d(0px, ' + scroll/2 + 'px, 0px)';
      title.style.opacity = 1 - Math.max(scroll/600, 0);
    } else if (!isInPage(title)) {
      bio.style.opacity = 1 - Math.max(scroll/600, 0);
      bio.style.transform = 'translate3d(0px, ' + scroll/2 + 'px, 0px)';
    }
  });

  const scrollTo = (element, to, duration) => {
    if (duration <= 0) return;
    const difference = to - element.scrollTop;
    const perTick = difference / duration * 10;

    setTimeout(() => {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop == to) return;
      scrollTo(element, to, duration - 10);
    }, 10);
  };

  const content = document.querySelector('#main').offsetTop;

  const runScroll = (e) => {
    e.preventDefault();
    scrollTo(document.body, content, 500);
  };

  let scrollme;
  scrollme = document.querySelector(".arrow");
  scrollme.addEventListener("click", runScroll, false);
});
