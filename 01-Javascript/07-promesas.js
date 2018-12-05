const fs = require('fs');

const nuevaPromesaLectura = new Promise(
    (resolve, reject) => {
        fs.readFile('06-texto.txt', 'utf-8',
            (err, contenidoArchivo) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(contenidoArchivo);
                }
            });
    }
);

const nuevaPromesaEscritura = (contenidoLeido) => {
    return new Promise(
        (resolve, reject) => {

            const contenido = contenidoLeido ? contenidoLeido + 'Otro ola' : 'Otro ola';

            fs.writeFile('06-texto.txt', contenido,
                (err,) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve('LO QUE SEA');
                    }
                });
        }
    );
};

nuevaPromesaLectura
    .then(
        (resultadoOk) => {
            console.log('Todo bien', resultadoOk);
            return nuevaPromesaEscritura(contenidoArchivo);
        }
    )
    .then(
        (contenidoCompleto)=>{
            console.log('Contenido completo',contenidoCompleto);
        }
    )
    .catch(
        (resultadoError) => {
            console.log('Algo malo paso', resultadoError);
        }
    );

// ejercicio

/*const nuevaPromesaAppendFile = (nombreArchivo, contenidoArchivo) => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(nombreArchivo,'utf-8',
                (error,contenidoArchivoLeido)=> {
                    if (error) {
                        fs.writeFile(nombreArchivo, contenidoArchivo,
                            (err) => {
                                if (err) {
                                    reject(console.error('Error'));
                                } else {
                                    resolve(contenidoArchivo);
                                }
                            }
                        );

                    } else {
                        fs.writeFile(nombreArchivo, contenidoArchivoLeido + contenidoArchivo,
                            (err) => {
                                if (err) {
                                    reject(console.error('Error'));
                                } else {
                                    resolve(contenidoArchivo);
                                }
                            }
                        );
                    }
                }
            );
        }
    );
};

nuevaPromesaAppendFile
    .then(
        () => {
            console.log('Todo bien');
            return nuevaPromesaAppendFile(contenidoArchivo);
        }
    )
    .catch(
        () => {
            console.log('Algo malo paso', resultadoError);
        }
    );*/

function ejercicioDeArchivosPromesa(arregloStrings) {

    return new Promise(
        (resolve,reject)=>{
            const arregloRespuestas = [];

            arregloStrings
                .forEach(
                    (string, indice) => {
                        const archivo = `${indice}-${string}.txt`;
                        const contenido = string;
                        fs.writeFile(archivo,
                            contenido,
                            (err) => {
                                const respuesta = {
                                    nombreArchivo: archivo,
                                    contenidoArchivo: contenido,
                                    error: err
                                };
                                arregloRespuestas.push(respuesta);
                                const tamanoRespuestas = arregloRespuestas.length;
                                if (tamanoRespuestas === arregloStrings.length) {
                                    resolve(arregloRespuestas)
                                }
                            });
                    }
                );
        }
    );

}


const funcionConCallback = function (parametros, callback) {
    callback()
};

const funcionConPromesa = function (parametros) {
    return new Promise(
        (resolve, reject) => {
            resolve();
            reject();
        }
    )
};




