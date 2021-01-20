/*
Desafio 046

Problema: Faça um programa que mostre na tela uma contagem regressiva
          para o estouro de fogos de artifício, indo de 10 até 0, com
          pausa de 1 segundo entre eles.
*/

async function sleep(r) { return new Promise(r => setTimeout(r, 2000)) };

async function main() {
    for (let i = 10; i >= 0; i--) {
        console.log(i);
        await sleep(1000);
    }
}

main()