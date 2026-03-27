let idade = 18;
let convite = true;

if (idade >= 18 && convite == true){
    console.log ("Pode entrar na festa!!\n");
} else {
    console.log ("Não pode entrar na festa!!\n");
}
//com ternario
let mensagem = idade >= 18 && convite == true ? "Pode entrar na festa!!" : "Não pode entrar na festa!!";
console.log("Atividade com Operador Ternario\n"+mensagem);