let a = 19
let b = 20
let c = 30

let delta = ((b*b) - (4*a*c)) // -1880

let  raiz = Math.sqrt(delta) // NaN (Not a Number)

let x1 = -(b + raiz) / (2*a)
let x2 = -(b - raiz) / (2*a)

console.log(raiz)
console.log(x1)
console.log(x2)