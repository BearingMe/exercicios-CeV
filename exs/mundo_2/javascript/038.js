/*
Desafio 038

Problema: Escreva um programa que leia dois números inteiros e compare-os.
          mostrando na tela uma mensagem:
            - O primeiro valor é maior
            - O segundo valor é maior
            - Não existe valor maior, os dois são iguais
*/

const input = require('readline-sync').question

let num_1 = Number(input('Informe o primeiro número: '))
let num_2 = Number(input('Informe o segundo número: '))

if (num_1 > num_2) {
  console.log('O primeiro número é maior.')
}

else if (num_2 > num_1) {
  console.log('O segundo número é maior.')
}

else {
  console.log('Ambos números possuem o mesmo valor.')
}