const produto = {
    nome: "Mouse",
    preco: 99.00,
    estoque: 1
}


let desconto = 0.10
let precoDesconto;

precoDesconto = produto.preco * desconto;

let precoFinal = produto.preco > 100  ? `O ${produto.nome} teve um desconto de ${desconto*100}% e agora está por R$ ${produto.preco - precoDesconto} reais.` : 
                                        `O ${produto.nome} não passou de R$ 100 e por isso continua o preço normal R$ ${produto.preco} reais.`;
console.log(precoFinal)