/*
Desafio 037

Problema: Escreva um programa que leia um número inteiro qualquer e peça 
          para o usuário escolher qual será a base de conversão: 1 para binário, 
          2 para octal e 3 para hexadecimal.
*/

const input = require('readline-sync').question

let num = Number(input('Informe um número: '))

let bin = num.toString(2)
let oct = num.toString(8)
let hex = num.toString(16)

console.log(`O valor binário é ${bin}`)
console.log(`O valor octal é ${oct}`)
console.log(`O valor hexadecimal é ${hex}`)
