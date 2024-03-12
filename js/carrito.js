/*
Hay que programar un carrito de compra de fruta.

El cliente eligirá que fruta quiere haciendo click sobre la imagen.
Un mensaje emergente le preguntará qué cantidad quiere.

Esta información se mostrará a la derecha, bajo "Total carrito", 
en <p id="carrito"></p>, de esta forma:
 Kiwi 2 kg x 4,20€/kg = 8,40 €

El total se actualizará con cada compra
 Total Compra: 8,40€
 
Se dará la opción de añadir o no más productos que se mostrarán
a continuación de los anteriores, y se sumará todo en el total. 
Por ejemplo:  
 Kiwi 2 kg x 4, 20€/kg = 8, 40€
 Pomelo 1 kg x 2,50€/kg = 2,50€
 Total Compra: 10,90€

Puedes modificar el código facilitado si ello te ayuda con el ejercicio,
pero deberás justificarlo.

Recuerda la importancia comentar con detalle el código.

 Lo importante es el cálculo, no los estilos css
 */

// const valorFruta = document.getElementsByName("fruta")

// valorFruta.addEventListener("click", () => {

//     alert('hola')
// })

// function pomelo(){
//     let kilosFrutas = prompt(`¿Qué cantidad de pomelo desea?`)

//     let valor1 = 2.5
//     let valorFinal = valor1 * kilosFrutas
    
// }
let  carritoLista = document.getElementById('carrito')  
let precioTotal = document.getElementById('preuFinal')
let frutaSuma = 0
let frutaResta = 0


function fruta (nombre, valor) {
    //Preguntamos al usuario la cantidad (en Kg)
    let cantidadFrutas = prompt(`¿Qué cantidad de ${nombre} desea?`)   
    // hacemos la multiplicacion correspondiente pero lo guardamos en una variable no definitiva para poder hacer un toFixed                       
    let precioFinalNoFixed = valor * cantidadFrutas;                                          
    // Le agregampos el toFixed para que solo muestre 2 deciamles y redonde a lo alto
    let precioFinal = precioFinalNoFixed.toFixed(2)                                           
    
    // constante que cree un span vacio
    const spanFrutas = document.createElement("span") 
    // guardamos el todo el resultado en esta variable para despues colocarla                                        
    let frutasTodo =  `${nombre} ${cantidadFrutas}kg x ${valor}/Kg = ${precioFinal}€`
    //dentro del span usamos la funcion innerHtml para insetar el icono de borrar, mas el texto que guardamos en la variable antrerior            
    spanFrutas.innerHTML =  '<i class="fa-solid fa-trash" id="borrar" onclick="borrar()"></i>' + frutasTodo  
    // La etiqueta que contenga la ID "carrito" sera el padre del span.
    carritoLista.appendChild(spanFrutas);                                                      

    spanFrutas.setAttribute('value', `${precioFinal}`)
        
    
    let precioFinalNumber = Number(precioFinal)
   
    
    frutaSuma += precioFinalNumber
    console.log("working",frutaSuma);
    actualiza();
}
 

function borrar(){
    let valueSpan = document.querySelector('#carrito span')
    let valorRestar = valueSpan.getAttribute('value')
    let valorRestarNumber = Number(valorRestar)
    let precioRestar = precioTotal

    console.log('working delete',valorRestarNumber);
    console.log(typeof(precioRestar));
    frutaResta = precioRestar - valorRestarNumber
   
    
    
    actualiza()
}

function actualiza(){
    
    precioTotal.innerText = frutaSuma - frutaResta
   

    
}
    
    // precioTotal.innerText = frutaSuma.toFixed(2)
    
    // precioTotal.innerText = frutaResta.toFixed(2)
    











