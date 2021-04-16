/* Banner */

const slides = [
  {img: '../images/banner/slide1.jpg', title: 'Nova coleção praia'},
  {img: '../images/banner/slide2.jpg', title: 'Os melhores conjuntos você encontra aqui!'},
  {img: '../images/banner/slide3.jpg', title: 'Veja as nossas coleções de lingerie'}
]

const banner = document.querySelector('#hero img');
const title = document.querySelector('#hero h1');

let i = 0;
banner.src= slides[i].img;
title.textContent = slides[i].title;

setInterval(() => {
  if(i === 3){
    i = 0;
  }
  banner.src=slides[i].img;
  title.textContent = slides[i].title;
i++;
  
}, 5000)



