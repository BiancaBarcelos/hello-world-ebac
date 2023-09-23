//Cria uma Tag HTML <p> para ser reutilizada
var textoTag = document.createElement("p");

//Adiciona o texto Hello World na Tag criada
const olaMundo = document.createTextNode("Hello World");
textoTag.appendChild(olaMundo);

//Encontra o elemento com ID text-1
document.getElementById("text-1").appendChild(textoTag);

//Encontra o elemento com a Class text-2
const texto2 = document.getElementsByClassName("text-2");

//Pega o primeiro item do Array criado na linha 11 e adiciona o texto nela
texto2[0].innerHTML = textoTag.innerText;

//Encontra o elemento com o data-attribute text-3
const texto3 = document.querySelector('[data-texto="text-3"]');

//Pega o item encontrado na linha 17 e adiciona o texto nela
texto3.innerHTML = textoTag.innerHTML;

//Encontra o elemento com a Tag de nome section
const texto4 = document.getElementsByTagName("section");

//Pega o primeiro item do Array criado na linha 23 e adiciona o texto nela
texto4[0].innerText = textoTag.innerHTML;

//Encontra a Tag Li dentro da Ul e aplica o texto
document.querySelector("ul li").innerText = "Hello World";

//Cria uma variavel encontrando todos os elementos de Li dentro da Ol
var texto6 = document.querySelectorAll("ol li");

//Cria um for para cada item da lista aplicar o texto
for (let i = 0; i < texto6.length; i++) {
    const element = texto6[i];
    element.innerHTML = "<span> Hello World</span>";
}

//Função que adiciona o texto no HTML
function addText() {
    document.querySelector("body").innerHTML += "<p>Hello World</p>";
}