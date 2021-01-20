/*
Desafio 040

Problema: Crie um programa que leia duas notas de um aluno e calcule sua média,
          mostrando uma mensagem no final, de acordo com a média atingida:
            - Média abaixo de 5.0: REPROVADO
            - Média entre 5.0 e 6.9: RECUPERAÇÃO
            - Média 7.0 ou superior: APROVADO
*/

const input = require('readline-sync').question

let nota1 = Number(input('Informe a primeira nota: '))
let nota2 = Number(input('Informe a segunda nota: '))

let media = (nota1 + nota2) / 2

if (media < 5) {
    console.log('REPROVADO!')
}

else if (5 <= media && media < 7) {
    console.log('RECUPERAÇÂO!')
}

else {
    console.log('APROVADO!')
}