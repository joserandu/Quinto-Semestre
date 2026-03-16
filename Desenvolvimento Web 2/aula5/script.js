// a) Usando a sintaxe da ES6, crie um construtor que receba a marca, o modelo e o ano de um
// objeto Carro. Use o método defineProperty() para configurar os atributos get, set, enumerable
// e configurable destas três propriedades. Em seguida, crie dois objetos Carro com diferentes
// marcas, modelos e anos e imprima seus dados no console do navegador

function Carro(marca, modelo, ano){
    Object.defineProperties(this, "marca", {
        get: function() {
            return marca;
        },
        set: function(nov) {
            marca = novaMarca;
        },
        enumerable: false,
        configurable: true,

    }, this, "modelo", {
        get: function() {
            return modelo;
        },
        set: function(novoModelo) {
            modelo = novoModelo;
        },
        enumerable: false,
        configurable: true,

    }, this, "ano", {
        get: function() {
            return modelo;
        },
        set: function(novoModelo) {
            modelo = novoModelo;
        },
        enumerable: true,
        configurable: true
    })
    this. =
}

// b) Crie um objeto literal que tenha uma única propriedade de dado, além das propriedades de
// Object.prototype. Em seguida, sobrescreva o método hasOwnProperty() do protótipo de
// modo que ele passe a retornar os textos a seguir. Por fim, imprima o retorno do método
// hasOwnProperty() sobrescrito para testar propriedades próprias, do protótipo e inexistentes
// no objeto
        
    // • "Sim, o objeto tem esta propriedade", caso a propriedade exista no objeto que chama o
    // método hasOwnProperty() (seja ela própria ou do protótipo); ou
    // • "Não, o objeto não tem esta propriedade", caso a propriedade não exista no objeto que
    // chama o método hasOwnProperty().

// c) Copie o exercício anterior e, no final do código, apague a propriedade própria
// hasOwnProperty() com delete. Em seguida, repita os mesmos testes, porém agora com o
// método hasOwnProperty() do protótipo.

// d) Crie um construtor que receba um país para instanciar um objeto Intercambio. Em seguida,
// defina um objeto literal usando as propriedades prototype e constructor para adicionar os
// métodos retornaPais() e definePais() ao protótipo do objeto Intercambio. Por fim, crie dois
// objetos Intercambio e use-os para chamar os dois métodos incluídos.

// e) Adicione o método defineLetraInicialMaiuscula() à String.prototype. Este método deve
// converter a 1ª letra de uma string para maiúscula e retornar a string modificada. Dica: Na
// implementação do método, use os métodos charAt(), toUpperCase() e substring() do tipo String

// f) Crie um objeto literal esporte que contenha as propriedades id, modalidade (ex.: futebol,
// volei, corrida etc) e categoria (esporte coletivo, esporte aquático, atletismo etc), além do
// método toString() sobrescrito para retornar a modalidade do esporte.


// g) Crie um objeto literal filme1 contendo uma propriedade titulo e um método retornaTitulo(), o
// qual imprime o título do filme no console. Em seguida, use o método Object.create() para criar
// o objeto filme2, que herda de filme1 e sobrepõe a propriedade titulo com outro valor. Por fim,
// use os dois objetos para chamar o método retornaFilme
