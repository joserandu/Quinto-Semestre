// a
function alterarFontFamily() {
    let texto = document.getElementById("textoNovaFonte");
    texto.style.fontFamily = "Courier New";
}

// b
let botaoAumentarTexto = document.getElementById("botaoAumentarTexto");

botaoAumentarTexto.onclick = function() {
    let texto = document.getElementById("textoAumentado");
    texto.style.fontSize = "50px";
};

// c
let botaoAumentarTexto2 = document.getElementById("botaoAumentarTexto2");

botaoAumentarTexto2.onclick = () => {
    let texto = document.getElementById("textoAumentado2");
    texto.style.fontSize = "50px";
};
// d

let botaoCalcularHipotenusa = document.querySelector("#calcularHipotenusa");
let resultado = document.querySelector("#resultado");

botaoCalcularHipotenusa.addEventListener("click", function () {

    let cateto1 = Number(document.querySelectorAll("input")[0].value);
    let cateto2 = Number(document.querySelectorAll("input")[1].value);
    let hipotenusa = Math.sqrt(cateto1 * cateto1 + cateto2 * cateto2);

    resultado.innerHTML = `Hipotenusa: ${hipotenusa}`;
}); 

// e
let botaoE = document.querySelector("#calcularHipotenusaAD");
let resultadoAD = document.querySelector("#resultadoAD");

botaoE.addEventListener("click", function () {

    let cateto1 = Number(document.querySelectorAll("input")[2].value);
    let cateto2 = Number(document.querySelectorAll("input")[3].value);

    let calcular = new Function("a", "b", "return Math.sqrt(a*a + b*b);");

    let valor = calcular(cateto1, cateto2);
    resultadoAD.innerHTML = `Hipotenusa: ${valor}`;

});


// f
let botaoRaizES5 = document.getElementById("botaoRaizES5");
let resultadoRaizES5 = document.getElementById("resultadoRaizES5");

botaoRaizES5.addEventListener("click", function () {

    let radicando = Number(document.getElementById("radicandoES5").value);
    let indice = Number(document.getElementById("indiceES5").value);

    (function (r, i) {

        let raiz = Math.pow(r, 1 / i);
        resultadoRaizES5.innerHTML = "Raiz ES5: " + raiz;

    })(radicando, indice);

});


// g
let botaoRaizES6 = document.getElementById("botaoRaizES6");
let resultadoRaizES6 = document.getElementById("resultadoRaizES6");

botaoRaizES6.addEventListener("click", function () {

    let radicando = Number(document.getElementById("radicandoES6").value);
    let indice = Number(document.getElementById("indiceES6").value);

    ((radicando, indice) => {

        let raiz = radicando ** (1 / indice);

        resultadoRaizES6.innerHTML = "Raiz ES6: " + raiz;

    })(radicando, indice);

});


// h
let botaoCotar = document.getElementById("cotar");
let divDolar = document.getElementById("valorDolar");
let divEuro = document.getElementById("valorEuro");

function converterMoeda(valor) {

    let dolar = valor / 5.13;
    let euro = valor / 6.06;

    return [dolar, euro]; // array indexado
}

botaoCotar.addEventListener("click", function () {

    let valor = Number(document.getElementById("valorEmReais").value);

    let resultadoMoeda = converterMoeda(valor);

    divDolar.innerHTML = "Dólar: " + resultadoMoeda[0].toFixed(2);
    divEuro.innerHTML = "Euro: " + resultadoMoeda[1].toFixed(2);

});

// i
let botaoCotarObj = document.getElementById("cotarObj");
let divDolarObj = document.getElementById("valorDolarObj");
let divEuroObj = document.getElementById("valorEuroObj");

function converterMoedaObjeto(valor) {

    let dolar = valor / 5.13;
    let euro = valor / 6.06;

    return {
        dolar: dolar,
        euro: euro
    }; // objeto (array associativo)
}

botaoCotarObj.addEventListener("click", function () {

    let valor = Number(document.getElementById("valorEmReaisObj").value);

    let resultado = converterMoedaObjeto(valor);

    divDolarObj.innerHTML = "Dólar: " + resultado.dolar.toFixed(2);
    divEuroObj.innerHTML = "Euro: " + resultado.euro.toFixed(2);

});


// j
function ditado() {

    let texto = "Quem canta ";

    function complemento() {
        alert(texto + "seus males espanta.");
    };

    complemento();
}

/* 
// k -- Não consegui fazer funcionar :/
import { maiusculas, minusculas } from './moduloTexto.js';

let textoBase = "Programação Web";

document.getElementById("botaoMaiusculas")
.addEventListener("click", function () {
    alert(maiusculas(textoBase));
});

document.getElementById("botaoMinusculas")
.addEventListener("click", function () {
    alert(minusculas(textoBase));
});
 */