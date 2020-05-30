const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(Archivo => console.log(`Archivo Creado: ${Archivo}`.magenta))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]
//console.log('Limite:', argv.limite);