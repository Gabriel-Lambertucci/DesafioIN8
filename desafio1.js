// Função que calcula a soma de todos os múltiplos de 3 ou 5 abaixo de 1000

export const allMultiples = () => {
  const n = 1000;
  let soma = 0; 
  for(let i = 3; i < n; i+=1) {
    i % 3 === 0 || i % 5 === 0 ? soma = soma +=1 : soma = soma;
  }
  console.log('A soma de todos os múltiplos de 3 ou 5 abaixo de 1000 é:', soma);
} 