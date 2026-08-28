
//Ao clicar no botão aparece o texto no console log
const botaoSobre = document.getElementById("sobre");

botaoSobre.addEventListener("click", function () {
    console.log("O botão foi clicado!");
 });
 const titulo = document.querySelector("h1");
botaoSobre.addEventListener("click", function () {
    titulo.textContent = "Obrigada por visitar meu portfólio!";
});

//Ao clicar no botão vai para o sobre
const sobre = document.getElementById("sobre");

botaoSobre.addEventListener("click", function () {
    sobre.scrollIntoView();
});