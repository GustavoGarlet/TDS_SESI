const estoque = ["ram", "plcaDeVideo", "processador", "placaMae", "monitor"];//estoque com produtos

estoque.push("fonte");//adicionando um produto ao estoque

//variaveis declaradas
let produtoscomprados = 4
let quantidadeItens;
let clienteNomes = "Gustavo Garlet"
let clienteIdade = 16;
let possuiCumpom = true;
let valorTotal = 1001;
let vendapossivel;

//função do desconto
function processarVenda(valorTotal, cupomAtivo,) {
    let valorFinal = valorTotal>500||cupomAtivo==true ? valorTotal=valorTotal*0.85 : valorTotal;//se o valor for maior que 500 aplicar desconto se tiver cupom 
    
    return valorTotal;
} 
console.log(`R$${processarVenda(valorTotal, possuiCumpom)}`);//exibindo o retunr da função.

if (clienteIdade>=16) {
    console.log(`venda autorizada para ${clienteNomes}`);
       vendapossivel = true
} else {
    console.log(`venda bloqueda: idade insuficiente`);
       vendapossivel = false
}

console.log("\n")
//exibindo o estoque 
if (vendapossivel == true) {
for (let i = 0; i<produtoscomprados; i++) {
    console.log(`despachando item: ${estoque[i]}... OK!`);
}

for (let i = 0; i<produtoscomprados; i++) {
    estoque.shift()
}

quantidadeItens = estoque.length
console.log("\n")

console.log(`Relatorio da loja:
Cliente: ${clienteNomes} passou um pedido de R$${processarVenda(valorTotal, possuiCumpom)}
Itens restantes no estoque: ${quantidadeItens} `)
}
//fim  do código!!