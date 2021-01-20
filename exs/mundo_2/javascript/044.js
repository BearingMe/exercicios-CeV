/*
Desafio 044

Problema: Elabore um programa que calcule o valor a ser pago
          por um produto, considerando o seu preço normal e
          condição de pagamento:
            - à vista dinheiro/cheque: 10% de desconto
            - à vista no cartão: 5% de desconto
            - em até 2x no cartão: preço formal
            - 3x ou mais no cartão: 20% de juros
*/

const input = require('readline-sync').question

let precoProduto = Number(input('Informe o valor do produto: R$'));

console.log(`
FORMAS DE PAGAMENTO
[1] À vista no dinheiro/cheque
[2] À vista no cartão
[3] 2x no cartão
[4] 3x ou mais no cartão
`);

let formaPagamento = Number(input('Informe a forma de pagamento: '));

let valorTotal
if (formaPagamento === 1) {
  valorTotal = precoProduto * 0.9;
  console.log('Valor a pagar com 10% de desconto', valorTotal.toFixed(2));
}

else if (formaPagamento === 2) {
  valorTotal = precoProduto * 0.95; 
  console.log('Valor a pagar com 5% de desconto', valorTotal.toFixed(2));
}

else if (formaPagamento === 3) {
  valorTotal = precoProduto;
  console.log('Valor a pagar sem desconto', valorTotal.toFixed(2));  
}

else if (formaPagamento === 4) {
  valorTotal = precoProduto * 1.2;
  console.log('Valor a pagar com 20% de juros', valorTotal.toFixed(2));
}

else {
  console.log('ERRO, INFORME UMA FORMA DE PAGAMENTO VALIDA.');
}