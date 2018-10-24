const fs = require('fs');

const contenidoAAgregar = 'Alex\n';
const nombreArchivo = '05-texto.txt';

console.log('Inicio');

fs.readFile(nombreArchivo,
    'utf-8',
    (err, data) => {    //Callback
        fs.writeFile(nombreArchivo, data + contenidoAAgregar, (err) => {
            if (err) throw err;
            console.log('Archivo completado!');
        });

        if(err){
            console.error(err);
            try {
                throw new Error(err);
            } catch (e) {
                console.log(e);
            }
            console.log('Extra');
        }else{
            console.log('OK', data);
        }
    });

console.log('Fin');