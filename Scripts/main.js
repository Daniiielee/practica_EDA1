/*
*  archivo main.js
*  Creado por: Orlando Arboleda Molina
*
*  Descripción: 
*  Permite manipular los elementos de la pagina web y hacerla dinámica, 
*  para el curso de EDyA1 en la Universidad Autónoma de Occidente
*/

import {calcularCuota} from './funciones.js';

const btnEjecutar = document.getElementById("ejecutar");
const btnRecordar = document.getElementById("recordar");

btnEjecutar.addEventListener('click',calcular)
btnRecordar.addEventListener('click',desplegarTodos)


function calcular() {
    let nombre = document.getElementById("nombre").value;
    let prestamo = parseInt(document.getElementById("prestamo").value); 
    let meses = parseInt(document.getElementById("meses").value);
    let interes = parseInt(document.getElementById("interes").value);
    let laRespuesta = document.getElementById("laRespuesta");

    let cuota = calcularCuota(prestamo, interes, meses);

    laRespuesta.textContent = `${nombre} debe pagar $${cuota.toFixed(2)} cada mes por el préstamo de $${prestamo} a ${meses} meses con el interés del ${interes}%`;
}

