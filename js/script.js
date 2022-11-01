const listProductos = [];

//productos//

const eucalipto ={
    "precio":75000,
    "id": 1,
    "file": 'img/eucalipto.jpg',
    "title": "Chaleco Eucalipto",
}

const lines ={
    "precio":95000,
    "id": 2,
    "file": 'img/lines.jpg',
    "title": "Sweater Lines",
}

const menta ={
    "precio":85000,
    "id": 3,
    "file": 'img/menta.jpg',
    "title": "Sweater Menta",
}

const franca ={
    "precio":85000,
    "id": 4,
    "file": 'img/franca.jpg',
    "title": "Sweater Menta",
}
const items = document.getElementById('items');
const productos = [eucalipto, lines, menta, franca];

let selectProductos = document.getElementById('btn btn-rounded text-white w-100 mb-2');

items.addEventListener('click', e => {
    let remove = document.getElementsByName('removeElement');
    console.log(e.target.id);
    listProductos.splice(parseInt(e.target.id), 1);
    localStorage.removeItem('productos');
    localStorage.setItem('productos',JSON.stringify(listProductos));
    items.innerHTML = "";
    let suma = 0;
    listProductos.forEach((x,index)=>{
        console.log(suma)
        suma = suma - x.precio;
        items.innerHTML += "<div class='row col-lg-9'><div class='col-lg-5'><img src= "+ x.file +"  style='width: 80px; height: 70px' class='card-img-top'>"+ x.title + "</div><div class='col-lg-2 mt-3 fw-bolder'> $"+ x.precio + " </div><div class='col-lg-2'>  <button class='btn-eliminar mb-2 mt-3' value="+x.id+" name='removeElement' id="+index+">Eliminar</button></div></div>";
    })

    if(suma == 0){
        totalItems.style.display = 'none';
    }
    else{
        totalItems.innerHTML = "<b> Precio total: $" +Math.abs(suma)+"</b>";
    }

    if(items.innerHTML == "")
        document.getElementById("footer-carrito").style.display  = "inline";

})   

let totalItems = document.getElementById('total-items');

document.querySelectorAll("#btn-carrito").forEach((e) => {
    e.addEventListener("click", () => {
        items.innerHTML = "";
        totalItems.style.display = 'inline';
        let result = productos.find(x=>x.id == e.value);
        listProductos.push(result);
            localStorage.setItem('productos',JSON.stringify(listProductos));
            let list= JSON.parse(localStorage.getItem ('productos'));
            let suma = 0;

            list.forEach((x,index)=>{
                suma = suma + x.precio;
                items.innerHTML += "<div class='row col-lg-9'><div class='col-lg-5'><img src= "+ x.file +"  style='width: 80px; height: 70px' class='card-img-top'>"+ x.title + "</div><div class='col-lg-2 mt-3 fw-bolder'> $"+ x.precio + " </div><div class='col-lg-2'>  <button class='btn-eliminar mb-2 mt-3' value="+x.id+" name='removeElement' id="+index+">Eliminar</button></div></div>";

            })
            totalItems.innerHTML = "<b>Precio total: $" +Math.abs(suma)+"</b>";

            if(localStorage != null)
                    document.getElementById("footer-carrito").style.display = "none";

        

        });
});


/*//Objeto//

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
}*/







