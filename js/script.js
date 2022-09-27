let correoUsuario = '';
function ingreso(){

    let ingreso = false;

    for (let i=2; i>=0; i--){

    correoUsuario = prompt('¡Hola, esto es Vegan Knits, prendas tejidas a mano! Ingresá tu correo:');

    if (validarCorreo(correoUsuario))
    {
    ingreso = true;
    break;
    }
    else{
        alert('Dirección incorrecta. Te quedan '+i+' intentos.');

    }
    }
    return ingreso;
}

function validarCorreo (correoUsuario){

if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(correoUsuario)){
    return true;
}
else{
    return false;
}

}

if (ingreso()){
    let opcion1= prompt('Todo tipo de tejidos en fibras veganas. Elegí una opcion para tu carrito: \n1-Sweater Invierno \n2-Sweater Media Estación \nPresioná X para finalizar.')
    while (opcion1 != 'X' && opcion1 != 'x'){

        switch(opcion1){
            case '1': 
            let opcion2= prompt('Elegí la cantidad de cuotas para tu Sweater Invierno. \n1- 1 cuota \n2- 2 cuotas \n3- 3 cuotas');

            let precioInvierno = 15000;

            switch (opcion2) {

                case '1': let opcionFinalInv1 = prompt('Una cuota de: $'+precioInvierno + '\n1- Comprar \n2- Volver al menú.');

                if (opcionFinalInv1 == '1'){
                    alert('¡Gracias por tu compra!')
                
                }
                break;

                case '2': let opcionFinalInv2 = prompt('Dos cuotas de: $'+precioInvierno/2 + '\n1- Comprar \n2- Volver al menú');

                if (opcionFinalInv2 == '1'){
                    alert('¡Gracias por tu compra!')
                
                }

                break;

                case '3': let opcionFinalInv3 = prompt('Tres cuotas de: $'+precioInvierno/3 + '\n1- Comprar \n2- Volver al menú');

                if (opcionFinalInv3 == '1'){
                    alert('¡Gracias por tu compra!')
                
                }

                break;

                default: alert('Opción inválida');

                break;
            }

            break;
            
            case '2':
                let opcion3= prompt('Elegí la cantidad de cuotas para tu Sweater Media Estación \n1- 1 cuota \n2- 2 cuotas \n3- 3 cuotas');
                let precioMedia = 12000;
                switch (opcion3) {
                    
                    case '1': let opcionFinalMed1 = prompt('Una cuota de: $'+precioMedia + '\n1- Comprar \n2- Volver al menú.');

                    if (opcionFinalMed1 == '1'){
                        alert('¡Gracias por tu compra!')
                    
                    }
                    break;
    
                    case '2': let opcionFinalMed2 = prompt('Dos cuotas de: $'+precioMedia/2 + '\n1- Comprar \n2- Volver al menú.');

                    if (opcionFinalMed2 == '1'){
                        alert('¡Gracias por tu compra!')
                    
                    }
                    break;
    
                    case '3': let opcionFinalMed3 = prompt('Tres cuotas de: $'+precioMedia/3 + '\n1- Comprar \n2- Volver al menú.');

                    if (opcionFinalMed3 == '1'){
                        alert('¡Gracias por tu compra!')
                    
                    }
                    break;
    
                    default: alert('Opción inválida');
                    break;
                }
                
                break;
                default: alert('Opción inválida');
                break;
        }
        opcion1= prompt('Todo tipo de tejidos en fibras veganas. Elegí una opcion para tu carrito: \n1-Sweater Invierno \n2-Sweater Media Estación \nPresioná X para finalizar.')

                

    }

}else{
    alert('Inicio de sesión incorrecto. Intentá nuevamente.')
}

