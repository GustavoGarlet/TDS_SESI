//a)
const produto = {
    nome: "Mouse",
    preco: 150.00,
    estoque: 1
}

//b
console.log (`${produto.nome}`);

//c
console.log (`O item ${produto.nome} custa R$${produto.preco}`);

    if (produto.estoque != false) {
        console.log("Disponibilidade: tem em estoque")
    } else {
        console.log("Disponibilidade: não tem em estoque")
    }

//testes
let desconto = 0.50
let precoDesconto;

precoDesconto = produto.preco * desconto;

console.log (`O ${produto.nome} teve um desconto de ${desconto*100}% e agora está por R$${precoDesconto}`)