// a) Crie uma função em um objeto A. Em seguida, crie a mesma função em outro objeto B, porém
// reutilizando a função do objeto A.

let pessoa = {
    nome: "Randu",
    retornaNome: function() {
        console.log(pessoa.nome);
    }
}

pessoa.retornaNome();

let estudante = {
    nome: pessoa.nome,
    getnome: function() {
        pessoa.retornaNome()
    }
}

estudante.getnome();

// b) Crie uma função que receba dois parâmetros e execute-a com três objetos por meio do
// método nativo call().


