var n1 = 0.0; //Digite nota 1
var n2 = 5.0; //Digite nota 2
const media = (n1 + n2) / 2; //vai somar as 2 notas, e dps dividir por 2.


if(media >= 7.5){
    console.log("Aprovado"); //Se for maior ou igual que 7.5 mostre que esta aprovado.
    console.log(media); //mostre a média
}else if(media < 7.5 && media >= 3){
    console.log("Recuperação"); //Se for menor que 7.5 e maior ou igual a 3 mostre em recuperação.
    console.log(media); //mostre a média
}else{
    console.log("Reprovado"); //Caso não esteja nos padrões de cima, mostre reprovado. 
    console.log(media); //mostre a média

}