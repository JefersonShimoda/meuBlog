// Adiciona um evento de clique ao elemento de navegação "Home"
var homeLink = document.querySelector('nav ul li:first-child a');
homeLink.addEventListener('click', function(event) {
  event.preventDefault();
  var mensagem = 'Clicou em Home';
  exibirMensagem(mensagem);
});

// Adiciona um evento de clique ao elemento de navegação "Sobre"
var aboutLink = document.querySelector('nav ul li:nth-child(2) a');
aboutLink.addEventListener('click', function(event) {
  event.preventDefault();
  var mensagem = 'Clicou em Sobre';
  exibirMensagem(mensagem);
});

// Adiciona um evento de clique ao elemento de navegação "Contato"
var contactLink = document.querySelector('nav ul li:last-child a');
contactLink.addEventListener('click', function(event) {
  event.preventDefault();
  var mensagem = 'Clicou em Contato';
  exibirMensagem(mensagem);
});

// Função para exibir a mensagem na tela
function exibirMensagem(mensagem) {
  var mensagemDiv = document.getElementById('mensagem');
  mensagemDiv.textContent = mensagem;
}
