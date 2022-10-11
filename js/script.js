//Objeto//

class tejido{
    
    constructor (producto, material, precio){

    this.producto = producto;
    this.material = material;
    this.precio = parseFloat(precio);

}

descuentoEnEfectivo(){
    this.precio = this.precio*0.8;
}

}

const sweater = new tejido('sweater','lana', 15000);
const polera = new tejido('polera','lanafina', 12000);
const remera = new tejido ('remera','hilo', 9000);

sweater.descuentoEnEfectivo();
console.log(sweater.precio);

polera.descuentoEnEfectivo()
console.log(polera.precio);

remera.descuentoEnEfectivo()
console.log(remera.precio);


//array - métodos de búsqueda - filtrado//


const prenda = [sweater, polera, remera];
prenda.pop();
console.log(prenda);

console.log('El index del sweater de lana es ' + prenda.lastIndexOf(sweater));

console.log(prenda.includes('lana'));
console.log(prenda.includes(sweater));
console.log(prenda.includes('hilo'));
console.log(prenda.includes(polera));
console.log(prenda.includes(remera));


const filtradoPrecio = prenda.find((prenda)=>prenda.precio>=8000);
console.log(filtradoPrecio);



function ingreso(){

    let ingreso = false;
    
    for (let i=2; i>=0; i--){
    
    let keyword = prompt('¡Hola, esto es Vegan Knits, tejidos a mano! Escribí la prenda que te interesa: sweater, polera o remera.');
    const buscarProducto = prenda.filter((prenda)=>prenda.producto == keyword.toLowerCase());
    if (buscarProducto.length>0)
    { 
    ingreso = true;
    break;
    }
    else{
        alert('No contamos con stock de esa prenda, por favor selecciona otra. Te quedan '+i+' intentos.');
    }
    }
return ingreso;
}

function validarKeyword (keyword){

if (keyword){
    return true;
}
else{
    return false;
}

}

if (ingreso()){
    let opcion1= prompt('Todo tipo de tejidos en fibras veganas. Elegí una opcion para tu carrito: \n1-Sweater Invierno \n2-Sweater Media Estación \n3-Prenda de Verano \nPresioná X para finalizar.')
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

            case '3':
                let opcion4= prompt('Elegí la cantidad de cuotas para tu Prenda de Verano \n1- 1 cuota \n2- 2 cuotas \n3- 3 cuotas');
                let precioVer = 9000;
                switch (opcion4) {
                    
                    case '1': let opcionFinalVer1 = prompt('Una cuota de: $'+precioVer + '\n1- Comprar \n2- Volver al menú.');

                    if (opcionFinalVer1 == '1'){
                        alert('¡Gracias por tu compra!')
                    
                    }
                    break;
    
                    case '2': let opcionFinalVer2 = prompt('Dos cuotas de: $'+precioVer/2 + '\n1- Comprar \n2- Volver al menú.');

                    if (opcionFinalVer2 == '1'){
                        alert('¡Gracias por tu compra!')
                    
                    }
                    break;
    
                    case '3': let opcionFinalVer3 = prompt('Tres cuotas de: $'+precioVer/3 + '\n1- Comprar \n2- Volver al menú.');

                    if (opcionFinalVer3 == '1'){
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
    opcion1= prompt('Todo tipo de tejidos en fibras veganas. Elegí una opcion para tu carrito: \n1-Sweater Invierno \n2-Sweater Media Estación \n3-Prenda de Verano \nPresioná X para finalizar.')            
}

}else{
alert('Inicio de sesión incorrecto. Intentá nuevamente.')
}