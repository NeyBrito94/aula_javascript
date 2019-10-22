function clicou(){
    document.getElementById("agradecimento");
    console.log(document.getElementById("agradecimento").innerHTML= "<b>Obrigado por clicar</b>");
    //alert("Obrigado por clicar");
}

function redirecionar(){
    //window.open("https://www.youtube.com/watch?v=LeqFa8Gmf0c");
    window.location.href = "https://www.youtube.com/watch?v=LeqFa8Gmf0c";
}

function trocar(elemeto){
    //document.getElementById("mousemove").innerHTML= "Obrigado por passar o mouse."
    elemeto.innerHTML = "Obrigado por passar o mouse!"
}

function voltar(elemeto){
    //document.getElementById("mousemove").innerHTML= "Passe o mouse aqui."
    elemeto.innerHTML = "Passe o mouse aqui"
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
/*
function validadeIdade(idade){
    var validador = true;
    if (idade >= 18){
        validador = true;
    }else{
        validador = false;
    }
    return validador;
    
}

var idade = prompt("Qual sua idade? ")
console.log(validadeIdade(idade));
*/



/*
function soma (n1, n2){
    return (n1+n2);
}
alert(soma(5,10));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/


/*var d= new Date();
alert(d.getMinutes());
alert(d.getDay());
alert(d.getHours());
*/

/*var count;

for(count = 0; count<= 5; count++ ){
    alert(count);
}*/



/*
var count = 0;
while(count <= 5 ){
    console.log(count);
    alert(count);
    count++;
}*/


/*var idade = prompt("Qual sua idade");
if(idade >= 18){
    alert("Maior de idade.")
}else{
    alert("Menor de idade.")
}
*/


/*var frutas = [{nome:"maça", cor: "vermelha"}, {nome:"uva", cor: "roxa"} ];
console.log(frutas);
alert(frutas[1].cor);
*/

/*
var fruta = {nome:"maça", cor: "vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/

/*var lista = ["maça" , "pêra", "laranja"];
console.log(lista);
lista.push("uva");
console.log(lista);
lista.pop("maça");
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());

console.log(lista.toString());

console.log(lista.join(" | "));

//alert(lista[1]);
*/

/*var nome = "Ney Brito"
var idade = 25;
var idade2 = 10;
var frase ="Japão é melhor time do mundo";
//alert(nome + " tem " + 25 + " anos!");
//alert(idade + idade2);

console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("Japão", "Brasil"));
alert(frase.replace("Japão", "Brasil"));
//console.log(frase.toLowerCase)
console.log(frase.toUpperCase)
*/