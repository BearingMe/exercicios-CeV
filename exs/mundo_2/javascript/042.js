/*
Desafio 042

Problema: Refaça o desafio 035 dos triângulos, acrescentando o
          recurso de mostrar que tipo de triângulo será formado:
            - EQUILÁTERO: todos os lados iguais
            - ISÓSCELES: dois lados iguais, um diferente
            - ESCALENO: todos os lados diferentes
*/

const input = require('readline-sync').question

let ladoA = Number(input('Informe a medida do lado A: '))
let ladoB = Number(input('Informe a medida do lado B: '))
let ladoC = Number(input('Informe a medida do lado C: '))

let formaTriangulo =  (ladoA < (ladoB + ladoC)) 
  && (ladoB < (ladoA + ladoC)) 
  && (ladoC < (ladoA + ladoB))

if (formaTriangulo) {
  if (ladoA == ladoB && ladoB == ladoC) {
    console.log('Forma um triângulo equilátero')
  }
  
  else if (ladoA != ladoB && ladoB != ladoC) {
    console.log('Forma um triângulo escaleno')
  }
  
  else {
    console.log('Forma um triângulo isósceles')
  }
}

else {
  console.log('Não forma um triâgulo')
}
