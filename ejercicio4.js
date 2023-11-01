const $caja1 = document.getElementById("caja1")
const $caja2 = document.getElementById("caja2")
const $caja3 = document.getElementById("caja3")

$caja1.addEventListener('click', () => {
  document.body.style.backgroundColor = "#0000FF"
})
$caja2.addEventListener('click', () => {
  document.body.style.backgroundColor = "#FF0000"
})
$caja3.addEventListener('click', () => {
  document.body.style.backgroundColor = "#008000"
})
