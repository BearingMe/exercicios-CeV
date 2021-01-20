/*
Desafio 041

Problema: A Confederação Nacional de Natação precisa de um programa
          que leia o ano de nascimento de um atleta e mostre sua
          categoria, de acordo com a idade:
            - Até 9 anos: MIRIM
            - Até 14 anos: INFANTIL
            - Até 19 anos: JÚNIOR
            - Até 25 anos: SÊNIOR
            - Acima de 25 anos: MASTER
*/

const input = require('readline-sync').question

let anoNasc = Number(input("Informe o ano de nascimento: "))
let data = new Date()
let anoAtual = data.getFullYear()

let idade = anoAtual - anoNasc


if (0 < idade && idade <= 9) {
  console.log(`O atleta tem ${idade} ano(s), então está na categoria MIRIM`)
}

else if (idade <= 14) {
  console.log(`O atleta tem ${idade} ano(s), então está na categoria INFANTIL`)
}

else if (idade <= 19) {
  console.log(`O atleta tem ${idade} ano(s), então está na categoria JÚNIOR`)
}

else if (idade <= 20) {
  console.log(`O atleta tem ${idade} ano(s), então está na categoria SÊNIOR`)
}

else if (idade <= 100) {
  console.log(`O atleta tem ${idade} ano(s), então está na categoria MASTER`)
}

else {
  console.log('Erro, idade INVÁLIDA, tente novamente.')
}