/*
Desafio 049

Problema: Refaça o desafio 009, mostrando tabuada de um
          número que o usuário escolher, só que agora
          utilizando um laço FOR.
*/

const input = require('readline-sync').question;

let tabuada = Number(input('Informe a tabuada que deseja ver: '));

for (let i = 1; i <= 10; i++) {
    let iFormatado = ('00' + i).slice(-2)
    console.log(`${tabuada} x ${iFormatado} = ${tabuada * i}`);
}