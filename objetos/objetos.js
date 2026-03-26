const aluno = {
    nome: "Gustavo",
    idade: 16,
    curso: "Desenvolvimento de Sistema"   
}

console.log(aluno);
console.log(aluno.nome);
console.log(aluno["idade"]);

aluno.matricula = "2025A"; //adicionar
aluno.idade = 18; //alterar

delete aluno.curso; //remover

console.log(aluno);