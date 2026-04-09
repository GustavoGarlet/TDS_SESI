//1) 
//A
const hardwareGamer = []

hardwareGamer [0] = "sdd 512 gb";
hardwareGamer [1] = "placa de video rtx 5070 TI";
hardwareGamer [2] = "placa mae b550-m";
hardwareGamer [3] = "memoria ram 16gb";
hardwareGamer [4] = "fonte 650W";

//B
hardwareGamer.push("SSD 1T");
console.log(hardwareGamer)
//c
const clienteNome= []

clienteNome [0] = "Gustavo";
clienteNome [1] = "Lucas";
clienteNome [2] = "Angelo";
clienteNome [3] = "Mateus";

let ClienteIdade = 16;

//d
let possuiCumpom = true;

console.log(possuiCumpom+"\n"+clienteNome[1]+"\n"+ClienteIdade);

//2
let valorTotal;
function processarVendas(valorTotal, CupomAtivo){
        let menssagem = valorTotal >= 500 || CupomAtivo == true ? valorTotal-(valorTotal * 15)/100 : valorTotal;
        console.log(menssagem);
}
processarVendas(1000, false);

//3
if (ClienteIdade >= 16){
    console.log(`Venda autorizada para ${clienteNome[1]}, ele tem ${ClienteIdade} anos`);
} else {
    console.log(`Venda bloqueada: Idade insuficiente.`);
}

//4
let estoque = 5
    

    let contador1 = estoque;
        while (contador1 >= 0) {
             console.log(`Despachamento item: ${hardwareGamer[contador1]}. Estoque: ${estoque}. OK`);
        contador1--;
        }
//5
/*console.log(`Relatório da loja: Cliente ${clienteNome[1]} processou um pedido de 
R$${}. Itens restante no estoque: ${estoque[0]-1}.`);
*/
