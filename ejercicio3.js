// let arreglo = [1, 2, 7, 4, 5]
// let mayor = 0

// for (let i = 0; i < arreglo.length; i++) {
//   if (arreglo[i] > mayor) {
//     mayor = arreglo[i]
//   }
// }
// console.log("el mayor es:" + mayor);

// let numero1 = parseInt(prompt("ingrese el primer numero: "))
// let numero2 = parseInt(prompt("ingrese el segundo numero: "))
// let numero3 = parseInt(prompt("ingrese el tercer numero: "))
// let numero4 = parseInt(prompt("ingrese el cuarto numero: "))
// let numero5 = parseInt(prompt("ingrese el quinto numero: "))

let numero1 = parseInt(Math.random() * (100 - 1))
let numero2 = parseInt(Math.random() * (100 - 1))
let numero3 = parseInt(Math.random() * (100 - 1))
let numero4 = parseInt(Math.random() * (100 - 1))
let numero5 = parseInt(Math.random() * (100 - 1))

const arreglo = [numero1, numero2, numero3, numero4, numero5]
let mayor = 0

for (let i = 0; i < arreglo.length; i++) {
  if (arreglo[i] > mayor) {
    mayor = arreglo[i]
  }
}
alert(`Los valores numericos aleatorios son: [${arreglo}] y el mayor es: ${mayor}`);