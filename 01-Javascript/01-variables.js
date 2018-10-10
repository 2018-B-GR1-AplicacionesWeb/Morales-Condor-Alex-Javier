
// Lenguajes tipados:  int edadd = 1

var edad = 1;           //number
var sueldo = 1.01;      //number
var nombre = "Alex";    //string
var casado = false;     //boolean
var hijos = null;       //object
var cuatroBrazos;       //undefined
var fecha = new Date(); //object

console.log(typeof edad);
console.log(typeof sueldo);
console.log(typeof nombre);
console.log(typeof casado);
console.log(typeof hijos);
console.log('cuatroBrazos', cuatroBrazos);
console.log("Fecha: ", fecha);

var alexJSON = {
    "nombre": "Alex",
    "edad": 29,
    "sueldo": 12.2,
    "casado": false,
    "hijos": null,
    "mascota": {
        "nombre": "muffy"
    }
}
var javier = {
    'nombre': 'Javier',
    'edad': 27,
    'sueldo': 12.2,
    'casado': false,
    'hijos': null,
    'deberes': undefined,
    'mascota': {
        'nombre': 'Muffy'
    }
};

console.log(alexJSON.nombre);
console.log(javier.nombre);

// truthy falsy
if ("holo"){
    console.log("SI");
} else{
    console.log("NO");
}