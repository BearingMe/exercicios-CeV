/*
Desafio 036

Problema: Escreva um programa para aprovar o empréstimo bancário para a
          compra de uma casa. Pergunte o valor da casa, o salário do comprador
          e em quantos anos ele vai pagar. A prestação mensal não pode exceder
          30% do salário ou então o empréstimo será negado.
*/

const input = require('readline-sync').question

let valorCasa = Number(input('Informe o valor da casa: R$'))
let salarioComprador = Number(input('Informe o salário do comprador: R$'))
let qtdAnos = Number(input('Anos de financiamento: '))

let prestacaoMensal = valorCasa / (qtdAnos * 12)

if (prestacaoMensal < salarioComprador * 30 / 100) {
    console.log(`FINANCIAMENTO ACEITO!!!\nA prestação será de R$${prestacaoMensal.toFixed(2)}/Mês durante ${qtdAnos} Anos.`)
}

else {
    console.log('FINANCIAMENTO NEGADO!!!\nSALÁRIO INSUFICIENTE.')
}