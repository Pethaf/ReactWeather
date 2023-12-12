import { ICityCoordinates } from "../Interfaces/ICityCoordinates";

const BASEURL = "http://localhost:3001/api/weather";
const fetchCurrentWeather = (cords:ICityCoordinates) => {
    return fetch(`${BASEURL}?longitude=${cords.longitude}&latitude=${cords.latitude}`).then(resp => resp.json())
}

const fetchWeatherForecast = (cords:ICityCoordinates) => {
    return fetch(`${BASEURL}?longitude=${cords.longitude}&latidude=${cords.latitude}`).then(resp => resp.json())
}

export {
    fetchCurrentWeather, fetchWeatherForecast
}