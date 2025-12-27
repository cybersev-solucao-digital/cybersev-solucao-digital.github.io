// Efeito simples de entrada ao rolar
const elements = document.querySelectorAll('.card, .section h2, .section p');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
},{threshold:0.2});

elements.forEach(el=>{
  el.style.opacity = 0;
  el.style.transform = 'translateY(30px)';
  el.style.transition = '0.6s';
  observer.observe(el);
});
function toggleMenu(){
  const menu = document.getElementById("sidebar");
  menu.style.left = menu.style.left === "0px" ? "-260px" : "0px";
}
const consultaBtn = document.getElementById("consultaBtn");

if (consultaBtn) {
  function mostrarBotao() {
    consultaBtn.style.opacity = "1";
    consultaBtn.style.pointerEvents = "auto";
    consultaBtn.style.transform = "translateY(0)";
  }

  function esconderBotao() {
    consultaBtn.style.opacity = "0";
    consultaBtn.style.pointerEvents = "none";
    consultaBtn.style.transform = "translateY(18px)";
  }

  // tempos em milissegundos
  const tempoVisivel = 6000;   // 6 segundos visível
  const tempoOculto  = 10000;  // 10 segundos oculto

  // ciclo infinito
  function cicloBotao() {
    mostrarBotao();

    setTimeout(() => {
      esconderBotao();

      setTimeout(() => {
        cicloBotao();
      }, tempoOculto);

    }, tempoVisivel);
  }

  // iniciar após pequeno atraso
  setTimeout(cicloBotao, 3000);
}
function enviarWhats(){
  const nome = document.getElementById("nome").value;
  const msg = document.getElementById("mensagem").value;

  const agora = new Date();
  const hora = agora.toLocaleTimeString("pt-BR");

  const texto = `
Olá, CyberSev Solução Digital!

Nome: ${nome}
Mensagem: ${msg}

Enviado às ${hora}
  `;

  const url = "https://wa.me/244934919736?text=" + encodeURIComponent(texto);
  window.open(url, "_blank");
}
window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    window.location.reload();
  }
});
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};