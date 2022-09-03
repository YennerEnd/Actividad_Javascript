let productos = [];

function validarDatos(codigo, nombre, precio){

    if (codigo==''){
        alert('Debe ingresar un codigo')
        return false;
    }
    return true;

    if (nombre==''){
        alert('Debe ingresar un nombre')
        return false;
    }
    return true;

    if (precio==''){
        alert('Debe ingresar un precio')
        return false;
    }
    return true;
}

function guardarDatos(codigo, nombre, precio){

    productos.push(
        {
            codigo: codigo,
            nombre: nombre,
            precio: precio
        }
    );

}


function mostrarDatos(){
    let registros = '';
    for (let index = 0; index < productos.length; index++) {
        registros +=
        `
            <tr>
                <td>${productos[index].codigo}</td>
                <td>${productos[index].nombre}</td>
                <td>${productos[index].precio}</td>
            </tr>
        `
    }
    let detalle = document.getElementById('detalle');
    detalle.innerHTML = registros;
}


function limpiarControles(){
    document.getElementById('codigo').value = '';
    document.getElementById('nombre').value = '';
    document.getElementById('precio').value = '';
}

///////////////////////
var itemGuardado[] = localStorage.getItem("itemGuardado");

function guardar(){
    var item = document.getElementById("input").value;
    localStorage.setItem("itemGuardado", item);
    document.getElementById("savedText").innerHTML = item + "GUARDADO";
}

function guardarDatos2(codigo, nombre, precio){

    productos.push(
        {
            codigo: codigo,
            nombre: nombre,
            precio: precio
        }
    );

}

function mostrar(){
    localStorage.getItem("itemGuardado");
    document.getElementById("openedText").innerHTML = itemGuardado + "MOSTRADO";
}
///////////////////////////

function guardarRegistro(){

    //alert('ingresando...');

    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').value;

    //validar datos

    if (validarDatos(codigo,nombre,precio)==false){
        return;
    }

    //guardar datos
    guardarDatos(codigo, nombre, precio);


    //mostrar datos
    mostrarDatos();

    //limpiar controles
    limpiarControles();

}


function guardarRegistro2(){

    //alert('ingresando...');

    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').value;

    //validar datos

    if (validarDatos(codigo,nombre,precio)==false){
        return;
    }

    //guardar datos
    guardarDatos(codigo, nombre, precio);


    //mostrar datos
    mostrarDatos();

    //limpiar controles
    limpiarControles();

}