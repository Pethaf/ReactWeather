import "./CurrentWeather.css";
import { ICity } from "../../Interfaces/ICity";
const CurrentWeather =(city:ICity) => {
    const cords = city.value.split(" ");
    const longitude = cords[0]
    const latitude = cords[1]
    return <div className="weather">
        <div className="top">
            <p className="city">{city.label}</p>
            <p className="weather-description">Sunny</p>
        </div>
        <img alt="weather" className="weather-icon"></img>
    </div>
}

export {CurrentWeather};