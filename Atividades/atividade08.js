function valorFinal(valor, taxa) {
    return valor * taxa
}
let valor = 10;
let taxa = 5.17;

console.log(`A entrada foi R$ ${valor} e a taxa ${taxa} e retornou R$ ${valorFinal(valor, taxa)}`);