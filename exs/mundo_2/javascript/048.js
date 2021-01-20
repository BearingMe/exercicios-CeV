/*
Desafio 048

Problema: Faça um programa que calcule a soma entre todos os
          números ímpares que são múltiplos de três e que se
          encontram no intervalo de 1 até 500.
*/

let somador = 0;
for (let i = 3; i <= 500; i++) {
    if (i % 3) {
        somador += i
    } 
}

console.log(`A soma de todos os valores ímpares múltiplos de três é: ${somador}`);