//a)
const produto = {
    nome: "Mouse",
    preco: "R$ " + 150.00,
    estoque: 1
}

//b
console.log (`${produto.nome}`);

//c
console.log (`O item ${produto.nome} custa ${produto.preco}`);

    if (produto.estoque != false) {
        console.log("Disponibilidade: tem em estoque")
    } else {
        console.log("Disponibilidade: não tem em estoque")
    }