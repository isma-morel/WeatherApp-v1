const { Weather }  = require('./weather');

const { UI } = require('./iu');

const { Store } = require('./store');

const store = new Store();
const { city, countryCode } = store.getLocationData();

const ui = new UI()
const weather = new Weather( city, countryCode);

require('./style.css')

async function fecthWeather() {
    const data = await weather.getWeather();
    console.log(data)
    ui.render(data);
}

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value;
    weather.changeLocation(city, countryCode);
    store.setLocationData(city, countryCode)
    fecthWeather();
    e.preventDefault();
})

document.addEventListener('DOMContentLoaded', fecthWeather())