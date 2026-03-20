function calcularTotal(preco1, preco2){
    return preco1 + preco2;
}

let resultado = calcularTotal(30 , 50);//somar

//imprimir contatenando e com template string
console.log("O total de compra:  " + resultado);
console.log(`O total de compra é:  ${resultado}`);