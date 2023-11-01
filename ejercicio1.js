const edad = parseInt(prompt("Ingresa tu edad:"))

if (Number.isNaN(edad)) {
  document.write("la edad debe ser en valor numerico")
}
else if (edad >= 18) {
  alert("usted puede conducir")
}
else {
  alert("usted no puede conducir")
}