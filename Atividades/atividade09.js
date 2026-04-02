function exibir(horaAtual, nome) {
    if (horaAtual >= 12 && horaAtual < 18){
        console.log(`Boa tarde ${nome}!!`);
    } else if (horaAtual >= 18 && horaAtual < 24){
        console.log(`Boa noite ${nome}!!`);
    } else if (horaAtual > 24){
        console.log(`Hora invalida ${nome}, por favor insira outra!!`);
    } else {
        console.log(`Bom dia ${nome}!!`);
    }
}
exibir(30, "Gustavo")



