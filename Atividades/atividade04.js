const produto = {
    nome: "Mouse",
    preco: 99.00,
    estoque: 1
}


let desconto = 0.10
let precoDesconto;

precoDesconto = produto.preco * desconto; // Calcula o desconto

let precoFinal = produto.preco > 100  ? `O ${produto.nome} teve um desconto de ${desconto*100}% e agora está por R$ ${produto.preco - precoDesconto} reais.` : //Se o valor for acima de 100 reais tem um desconto de 10%
                                        `O ${produto.nome} não passou de R$ 100 e por isso continua o preço normal R$ ${produto.preco} reais.`;  //Se o valor for abaixo de 100 reais permanece o valor inicial
console.log(precoFinal)
