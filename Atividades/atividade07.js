//a
const produto = [
    { nome: "notebook", preco: 3500, estoque: "tem estoque"},
    { nome: "mouse", preco: 80, estoque: "não tem estoque"},
    { nome: "teclado", preco: 150, estoque: "não tem estoque"}  
];

console.log(`O produto mouse ${produto[1].estoque}`);

//b
let contador = 0 ;
        while (contador<10) {
        contador++;
        console.log(contador);
        }
//c
let contador1 = 0 ;
        while (contador1<10) {
        contador1++;
        console.log(`O item ${contador1} verificando e registrado no inventário`);
        }