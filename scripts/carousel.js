let indiceAtual = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function mudarSlide(indice) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === indice);
    dots[i].classList.toggle("active", i === indice);
  });
  indiceAtual = indice;
}

function proximoSlide() {
  let novoIndice = (indiceAtual + 1) % slides.length;
  mudarSlide(novoIndice);
}

setInterval(proximoSlide, 3000); // Troca a imagem a cada 3 segundos
