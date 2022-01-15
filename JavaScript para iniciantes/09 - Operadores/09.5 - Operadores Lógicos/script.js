// && => and, e (retorna true se os os dois operandos forem truem)
let maiorIdade = true;
let possuiCarteiraTrabalho = false;
let deveAplicar = maiorIdade && possuiCarteiraTrabalho;
console.log('É o melhor e deve aplicar:', deveAplicar);

// || => or, ou (retorna true se apenas um dos operandos forem true)
let podeAplicar = maiorIdade || possuiCarteiraTrabalho;
console.log('Pode aplicar:', podeAplicar);

// ! => not, não, negação
let candidatoRecusado = !podeAplicar;
console.log('Foi recusado:', candidatoRecusado);