import { sumar } from './suma.js'

const btnSumar = document.querySelector('#sumar')
const input1 = document.querySelector('#n1')
const input2 = document.querySelector('#n2')


btnSumar.addEventListener('click', mostrarHTML)

function operacion() {
    return sumar(parseInt(input1.value), parseInt(input2.value))
}

function mostrarHTML() {
    const resultado = document.querySelector('#resultado')
    let resultado2 = operacion()
    let texto = document.createElement('h1')
    texto.innerText = resultado2
    resultado.appendChild(texto)
    /*     const suma = operacion()
        resultado.textContent = suma */
}

