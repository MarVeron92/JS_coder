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


