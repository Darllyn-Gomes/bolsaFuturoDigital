// Baskara

// x2 -3 + 2 == 0

let a = 1
let b = -3
let c = 2

// Formula: delta = b² - 4ac

let delta = b*b -4 * a * c

// Verificar se o delta é negativo
if (delta < 0) {
  console.log("Não existem raízes reais");
}

// calculando a raiz quadrada do delta
else {
  let raizDelta = Math.sqrt(delta);

// calculando as duas raizes da equação
  let x1 = (-b + raizDelta) / (2 * a);
  let x2 = (-b - raizDelta) / (2 * a);

  //Resultado
    console.log("x1 =", x1);
    console.log("x2 =", x2);
}