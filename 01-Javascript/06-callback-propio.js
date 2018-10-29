const fs = require('fs');

function appendFile(nombreArchivo, contenidoArchivo, callback){

    //1ero leer si existe el archivo
    //Si existe leer el contenido
    //Sobre escribir el archivo con el contenido nuevo
    //mas el contenido antiguo

    fs.readFile(nombreArchivo, 'utf-8',
        (error, contenidoArchivoLeido) =>{
            if(error){
                fs.writeFile(nombreArchivo, contenidoArchivo,
                    (err) => {
                    if(err){
                        console.error('Error escribiendo');
                        callback(err);
                    }else{
                        console.log('Archivo creado');
                        callback(undefined, contenidoArchivo);
                    }
                })
            } else {
                fs.writeFile(
                    nombreArchivo,
                    contenidoArchivoLeido + contenidoArchivo,
                    (err)=>{
                        if (err){
                            console.error('Error escribiendo');
                            callback(err);
                        } else {
                            console.log('Archivo creado');
                            callback(undefined, contenidoArchivoLeido + contenidoArchivo);
                        }
                    }
                );
            }
        }
    );
}

appendFile('06-texto.txt',
    '\nAdios Mundo',
    (contenidoArchivo, error) =>{
        if (error){
            console.log('Error', error);
        } else {
            //
        }
    }
    );

// ['A', 'B', 'C']
// 0-A 'A'
// 1-B 'B'
// 2-C 'C'

const respuesta = {
    nombreArchivo: '',
    contenidoArchivo: '',
    error: ''
};

// [respuesta, respuesta, respuesta,respuesta, respuesta]

function ejercicioDeArchivos(arregloStrings, callback){

    const arregloRespuestas = [];

    arregloStrings
        .forEach(
            (string, indice) => {
                const archivo = `${indice}-${string}.txt`;
                const contenido = string;
                fs.writeFile(archivo,
                    contenido,
                    (err) =>{
                        const respuesta = {
                            nombreArchivo: archivo,
                            contenidoArchivo: contenido,
                            error: err
                        };
                        arregloRespuestas.push(respuesta);

                        const tamanoRespuestas = arregloRespuestas.length;

                        if (tamanoRespuestas === arregloStrings.length){
                            callback(arregloRespuestas);
                        }
                    });
            }
        );
    callback();
}

const arregloStrings = ['A','B','C'];

ejercicioDeArchivos(arregloStrings,
    (arregloRespuestas) => {
        console.log(arregloRespuestas);
    })