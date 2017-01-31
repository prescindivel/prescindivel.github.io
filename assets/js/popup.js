const popup    = document.querySelector('#popup');
const popupIMG = document.querySelector('#popup-img');
const caption  = document.querySelector('#caption');
const out      = document.querySelector('#out');
const img      = document.getElementById('main').getElementsByTagName('img');
const close    = document.getElementById('.close');

const create = (htmlStr) => {
  const frag = document.createDocumentFragment();
  const temp = document.createElement('div');
  temp.innerHTML = htmlStr;

  while (temp.firstChild) {
    frag.appendChild(temp.firstChild);
  }

  return frag;
};

const isInPage = (node) => {
  return (node === document.body) ? false : document.body.contains(node);
};


let imgList = [];

for(let i = 0; i < img.length; i++) {
  imgList.push(img[i]);

  img[i].onclick = () => {
    let fragment = create('<div id="popup" class="popup open"><span class="close" onclick="document.querySelector(\'#popup\').remove();document.body.setAttribute(\'class\', \'page-article\')">&times;</span><img class="popup-content" id="popup-img" src="' + imgList[i].src + '" alt="' + imgList[i].alt + '"><div id="out" onclick="document.querySelector(\'#popup\').remove();document.body.setAttribute(\'class\', \'page-article\')"></div></div>');
    document.body.insertBefore(fragment, document.body.childNodes[0]);
    document.body.setAttribute('class', 'page-article blur');
  }
};
