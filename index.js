const cargoPorServicio = 600
let tipoDeEntrada = 0
let cantidad = 0
let efectivo = false
let tarjeta = 1

let mensajeVenta = "¿Que tipo de Entrada desea comprar? \n" +
"1) Campo Vip \n" +
"2) Campo General \n" +
"3) Platea Preferencial \n" +
"4) Platea Alta \n" +
"\n" +
"Ingresa el nro. de tu selección."

function iniciarCompra (){
    tipoDeEntrada = parseInt(prompt(mensajeVenta))
 
    let seleccionValida = (tipoDeEntrada !== 1 && tipoDeEntrada !== 2 && tipoDeEntrada !== 3 && tipoDeEntrada !== 4)

    if(seleccionValida){
        console.error("Ingresa un dato válido.")
        return
    }

    cantidad = parseInt(prompt("Ingresa la Cantidad de Entradas"))
    if (cantidad !== NaN && cantidad >=1 && cantidad <=4){
        efectivo = confirm("Si abonas en Efectivo pulsa Aceptar. Si abonas con Tarjeta pulsa CANCELAR")
    } else {
        console.error("Ingresa un dato válido.")
        return
    }

    if (efectivo === false){
        tarjeta = 2.5
    }

    let cotizacionTarjeta = 0
    switch(tipoDeEntrada) {
        case 1:
            cotizacionTarjeta = cantidad * cargoPorServicio * 12.000 * tarjeta
            break
        case 2:
        cotizacionTarjeta = cantidad * cargoPorServicio * 7.000 * tarjeta
            break
        case 3:
        cotizacionTarjeta = cantidad * cargoPorServicio * 10.000 * tarjeta
        break
        case 4:
        cotizacionTarjeta = cantidad * cargoPorServicio * 5.000 * tarjeta
            break
        default:
            console.error("Ingresa un dato válido.")
            return
    }
    alert("El costo Total de las entradas es de $ " + cotizacionTarjeta)
}



