/*
Desafio 039

Problema: Faça um programa que leia o ano de nascimento de um jovem e informe,
          de acordo com a sua idade, se ele ainda vai se alistar ao serviço
          militar, se é a hora exata de se alistar ou se já passou do tempo
          do alistamento. Seu programa também deverá mostrar o tempo que falta
          ou que passou do prazo.
*/

const input = require('readline-sync').question

let anoNasc = Number(input("Informe o ano de nascimento: "))
let data = new Date()
let anoAtual = data.getFullYear()

let idade = anoAtual - anoNasc

if (idade < 18) {
    let anosRestantes = 18 - idade

    console.log('Você ainda vai ser alistar')
    console.log(`Você vai se alistar daqui a ${anosRestantes} ano(s), em ${anoAtual + anosRestantes}`)
}

else if (idade == 18) {
    console.log('Você já pode ser alistar')
}

else {
    let anosAtrasados = idade - 18

    console.log('Passou da hora de se alistar')
    console.log(`Você deveria ter se alistado há ${anosAtrasados} ano(s), em ${anoAtual - anosAtrasados}`)
}