const axios = require('axios');

const getClima = async ( lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0172e62cf65831e6f5b29019ea7385c5&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}