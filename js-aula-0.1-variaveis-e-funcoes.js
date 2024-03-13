// DECLARAÇÃO DE VARIÁVEIS NO JS

// CONST x LET x VAR
// Const = Não pode ter seu valor reatribuído, nem pode ser redeclarado.
// Let = Pode ter seu valor reatribuído porém não pode ser redeclarado.
// Var = Pode ter seu valor reatribuído e pode ser redeclarado.

// const nome (Uma constante precisa de um valor inicial)
// const nome = "Marcelo"
// let nome = "Marcelo"
// var nome = "Marcelo"
// var nome = "Marcelo"
// console.log(nome)

// Typeof
const nome = "Marcelo"
console.log(typeof(nome))

const idade = 18
console.log(typeof(idade))

let endereco
console.log(typeof(endereco))

//////////////////////////////////////
// FUNÇÕES

function minhaFuncao(){

}
console.log(typeof(minhaFuncao))


// FUNÇÃO SIMPLES
function saudacao(){
    console.log("Olá, bem-vindo!")
}

saudacao()

//////////////////////////////////////
// FUNÇÃO COM PARÂMETRO / ARGUMENTO
function Saudacao(nome){
    console.log(`Olá, bem-vindo, ${nome}!`)
}

Saudacao('Diego')

//////////////////////////////////////
// FUNÇÃO COM MAIS DE UM PARÂMETRO

function soma(n1, n2) {
    let res = n1 + n2
    console.log(`A soma dos dois número foi ${res}.`)
}

soma(5, 5)

//////////////////////////////////////
// FUNÇÃO COM RETORNO

function Soma(n1, n2) {
    return n1 + n2
}

Soma(2, 6)

console.log(`A soma dos dois número foi ${Soma(2, 6)}.`)

//////////////////////////////////////
// FUNÇÃO COM MAIS DE UM RETORNO

function parimpar(n) {
    if (n % 2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}
let num = 4
console.log(parimpar(4))
console.log(`O número ${num} é ${parimpar(num)}!`)

//////////////////////////////////////
// FUNÇÃO ANÔNIMA

// function(x) {
//     return x*2
// }  

var dobro = function(x) {
    return x*2
}

console.log(dobro(15))
console.log(`O dobro do número enviado é ${dobro(15)}.`)

//////////////////////////////////////
// ARROW FUNCTION COM PARÂMETRO ÚNICO
const Dobro = x => {
    return x*2
}

console.log(Dobro(20))
console.log(`O dobro do número enviado é ${Dobro(20)}.`)

//////////////////////////////////////
// ARROW FUNCTION COM MAIS DE UM PARÂMETRO

// FUNÇÃO ANÔNIMA
const calc = function(num1, operador, num2) {
    return eval(`${num1} ${operador} ${num2}`)
}
console.log(`O resultado da operação é ${calc(5, '*', 5)}.`)

// ARROW FUNCTION
const Calc = (num1, operador, num2) => {
    return eval(`${num1} ${operador} ${num2}`)
}
console.log(`O resultado da operação é ${Calc(6, '*', 6)}.`)

// SIMPLIFICANDO
const c = (num1, operador, num2) => eval(`${num1} ${operador} ${num2}`)
console.log(`O resultado da operação é ${c(2, '*', 100)}.`)


//////////////////////////////////////
// IIFE - (Immediately Invoked Function Expression)
// FUNÇÃO IMEDIATA

const iife = (function() {
    console.log('Executando imediatamente!')
})()

// IIFE COM PARÂMETRO
const start = (function(app) {
    console.log(`Executando imediatamente o app ${app}.`)
})("Whatsapp")