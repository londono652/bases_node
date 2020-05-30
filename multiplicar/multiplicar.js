const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    console.log('========================'.green);
    console.log(`==== TABLA DEL ${base} =======`.green);

    for (let i = 1; i <= limite; i++) {
        console.log(` ${base} *` + ` ${i} = ${base*i}\n`)
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        let data = '';

        if (!Number(base)) {
            reject(`La base ${base} no es un número`);
            return
        }

        for (let i = 1; i <= limite; i++) {

            data += ` ${base} *` + ` ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`.magenta);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla

}