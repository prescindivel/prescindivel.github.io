document.addEventListener('DOMContentLoaded', () => {
  const popup    = document.querySelector('#popup');
  const img      = document.querySelector('.image-post');
  const popupIMG = document.querySelector("#popup-img");
  const caption  = document.querySelector("#caption");
  img.onclick = () => {
    popup.style.display = "block";
    popupIMG.src = img.src;
  }
});
