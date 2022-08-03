// Função recursiva
// Crie uma função recursiva para descobrir o menor número inteiro divisível por 2, 3 e 10 ao mesmo tempo. Quando encontrá-lo, imprima-o na tela.

export const findingNumber = () => {
  let n = 2;
  for(let i = 1; i < n; i+=1){
    i % 2 === 0 && i % 3 === 0 && i % 10 === 0 ? console.log('O menor número inteiro divisível por 2, 3 e 10 ao mesmo tempo é: ', i) : n += 1;
  }
};