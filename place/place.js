const axios = require('axios');

const getLugarLatLng = async ( dir ) => {
    //encodeURI es propio de JS y convierte 
    const encodedUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUlr }`,
        headers: {'X-RapidAPI-Host': 'devru-latitude-longitude-find-v1.p.rapidapi.com', 'X-RapidAPI-Key': '3661892c58msh960f82eddd98d8cp181b45jsnfe40aa0e255b'}
    });

    const resp = await instance.get();

    if(resp.data.Results.length === 0) {
        throw new Error (`No hay resultados para la dirección ${dir}`)
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}