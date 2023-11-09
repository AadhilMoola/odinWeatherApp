import './styles.css'
import { fetchAPI } from './fetchAPI';
import { getCity } from './getCity';
import { populatePage } from './populatePage';


let APIkey = "32be2ad05c7745c6b5d104516230711";

let baseURL = "http://api.weatherapi.com/v1/";

let form = document.querySelector('.weather-form')

let page = document.querySelector('body')

let box = document.querySelector('.new-box')

form.onsubmit = (event) => {event.preventDefault()}

form.addEventListener('submit', async () => {
    let city = getCity(form);
    let data = await fetchAPI(baseURL, APIkey, city);
    populatePage(box, form, data);



})

//fetchAPI(baseURL, APIkey, )