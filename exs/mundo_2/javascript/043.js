/*
Desafio 043

Problema: Desenvolva uma lógica que leia o peso e a altura de
          uma pessoa, calcule seu Índice de Massa Corporal (IMC)
          e mostre seu status, de acordo com a tabela abaixo:
            - IMC abaixo de 18,5: Abaixo do Peso
            - Entre 18,5 e 25: Peso Ideal
            - 25 até 30: Sobrepeso
            - 30 até 40: Obesidade
            - Acima de 40: Obesidade Mórbida
*/

const input = require('readline-sync').question

let peso = Number(input('Informe seu peso: (kg) '));
let altura = Number(input('Informe sua altura: (m) '));

let imc = peso / (altura ** 2);

console.log(`Seu IMC é ${imc.toFixed(2)}`);

if (0 < imc && imc < 18.5) {
  console.log('Abaixo do peso');
}

else if (imc < 25) {
  console.log('Peso ideal');
}

else if (imc < 30) {
  console.log('Sobrepeso');
}

else if (imc < 40) {
  console.log('Obsidade');
}

else if (40 <= imc) {
  console.log('Obsidade mórbida');
}

else {
  console.log('Valor inválido');
}