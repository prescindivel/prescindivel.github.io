document.addEventListener('DOMContentLoaded', () => {
  const popup    = document.querySelector('#popup');
  const popupIMG = document.querySelector('#popup-img');
  const caption  = document.querySelector('#caption');
  const out      = document.querySelector('#out');
  const img      = document.getElementById('main').getElementsByTagName('img');

  let imgList = [];

  for(let i = 0; i < img.length; i++) {
    imgList.push(img[i].src);
    img[i].onclick = () => {
      document.body.setAttribute('class', 'page-article blur');
      popup.setAttribute('class', 'popup open');
      popupIMG.src = imgList[i];
    }
    out.onclick = () => {
      popup.setAttribute('class', 'popup');
      document.body.setAttribute('class', 'page-article');
    };
  };

});
