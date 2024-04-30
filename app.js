/* // const resultado = document.getElementById('resultado')
const resultado = document.querySelector('#resultado')
console.log(resultado)
cant = 5
suma = 0
for (let i = 0; i <cant ; i++) {
    numero = parseFloat(prompt('Ingrese un nro'))
    suma += numero
}
promedio = suma / cant

resultado.textContent = `El resultado es ${promedio}`// 'El res....' + promedio

if (promedio > 10) {
    resultado.classList.add('roja')
} else {
    resultado.classList.add('verde')
} */
localStorage.clear()


const suma = document.getElementById('botonSuma')
const igual = document.getElementById('botonIgual')

// console.log(suma)
// console.log(igual)
// console.log(total)
// console.log(valor)


 suma.addEventListener('click',sumar)
 igual.addEventListener('click', mostrar)

function mostrar() {
    const calculo = document.getElementById('calculo')
 calculo.classList.remove('visually-hidden')
}


function sumar() {
    const valor = parseFloat(document.querySelector('input').value)
    const total = document.getElementById('total')
 
    resultado = parseFloat(total.textContent) + valor
    
    total.textContent = resultado
    

}