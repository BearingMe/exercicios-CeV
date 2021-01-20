/*
Desafio 045

Problema: Crie um programa que faça o computador jogar Jokenpô com você.
*/

const input = require('readline-sync').question;

let jogadas = ['Pedra', 'Papel', 'Tesoura'];

let escolhaComputador = Math.floor(Math.random() * jogadas.length);

let escolhaJogador = Number(input('[ 1 ] Pedra \n[ 2 ] Papel \n[ 3 ] Tesoura \nEscolha uma opção: ')) - 1;

// verifica se a jogada é válida
if (0 <= escolhaJogador && escolhaJogador <= 3) {
  console.log(`Você: ${jogadas[escolhaJogador]}\nComputador: ${jogadas[escolhaComputador]}`);

  // empate
  if (escolhaJogador == escolhaComputador)
    console.log('JOGO EMPATADO')

  // pedra
  else if (escolhaJogador == 0 && escolhaComputador == 1)
    console.log('VOCÊ PERDEU')
  else if (escolhaJogador == 0 && escolhaComputador == 2)
    console.log('VOCÊ GANHOU')

  // papel
  else if (escolhaJogador == 1 && escolhaComputador == 2)
    console.log('VOCÊ PERDEU')
  else if (escolhaJogador == 1 && escolhaComputador == 0)
    console.log('VOCÊ GANHOU')

  // tesoura
  else if (escolhaJogador == 2 && escolhaComputador == 0)
    console.log('VOCÊ PERDEU')
  else if (escolhaJogador == 2 && escolhaComputador == 1)
    console.log('VOCÊ GANHOU')
}