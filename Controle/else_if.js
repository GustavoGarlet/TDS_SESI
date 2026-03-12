let n1 = 9.0;
let n2 = 6.0;
let n3 = 7.5;
let media;

media = (n1 + n2 + n3) /3;

if (media >= 7.5){
    console.log("Aprovado!");
} else if (media < 7.5 && media >= 5){
    console.log("Em recuperação!");
} else {
    console.log("Reprovado"); 
}
console.log(media);
