import { ICityCoordinates } from "../Interfaces/ICityCoordinates";

const CURRENT_WEATHER_URL = "http://localhost:3001/api/weather";
const WEATHER_FORECAST_URL = "http://localhost:3001/api/forecast"
const fetchCurrentWeather = (cords:ICityCoordinates) => {
    return fetch(`${CURRENT_WEATHER_URL}?longitude=${cords.longitude}&latitude=${cords.latitude}`).then(resp => resp.json())
}

const fetchWeatherForecast = (cords:ICityCoordinates) => {
    return fetch(`${WEATHER_FORECAST_URL}?longitude=${cords.longitude}&latitude=${cords.latitude}`).then(resp => resp.json())
}

export {
    fetchCurrentWeather, fetchWeatherForecast
}