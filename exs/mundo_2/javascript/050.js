/*
Desafio 050

Problema: Desenvolva um programa que leia seis
          números inteiros e mostre a soma apenas
          daqueles que forem pares. Se o valor for
          ímpar, desconcidere-o.
*/

const input = require('readline-sync').question;

let somador = 0;
for (let i = 0; i < 6; i++) {
    let num = Number(input('Informe um valor: '))
    if (num % 2 == 0) {
        somador += num
    }
}

console.log(`A soma de todos os números pares é ${somador}`);