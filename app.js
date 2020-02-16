
const lugar = require('./place/place');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc : 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//Una función async regresa a fuerza una promesa, por eso se usa el then
// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)
//     .catch(console.log)

// console.log(argv.direccion)  
// clima.getClima(11.900000, -86.290001)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async( direccion ) => {

    try {
        const coords = await lugar.getLugarLatLng( direccion );
        const temp = await clima.getClima( coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}`;
    }
    catch(e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo( argv.direccion )
    .then(console.log)
    .catch(console.log)