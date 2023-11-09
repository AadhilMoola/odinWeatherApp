import './styles.css'
import { fetchAPI } from './fetchAPI';
import { getCity } from './getCity';
import { handleSubmit } from './handleSubmit';


let APIkey = "32be2ad05c7745c6b5d104516230711";

let baseURL = "http://api.weatherapi.com/v1/";

let form = document.querySelector('.weather-form')

form.onsubmit = handleSubmit;



//fetchAPI(baseURL, APIkey, )