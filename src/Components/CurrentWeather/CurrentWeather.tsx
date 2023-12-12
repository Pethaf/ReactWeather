import "./CurrentWeather.css";
import { ICity } from "../../Interfaces/ICity";
import { useState,useEffect } from "react";
import { fetchCurrentWeather} from "../../Services/Weather";
const CurrentWeather = (city: ICity) => {
    const [currentWeather, setCurrentWeather] = useState({});
    const [isError, setIsError] = useState(false);
    const [loading, setIsLoading] = useState(true);

    const coordinates = city.value.split(" ");
    useEffect(() => {
        fetchCurrentWeather({latitude:coordinates[0], longitude:coordinates[1]}).then(result => {
        setIsLoading(false); 
        setCurrentWeather({city: city.label, ...result})
    }
        )
    .catch(err => setIsError(true))}, [city.label])
    if(isError){
        return <p>Something Went wrong</p>
    }
    if(loading){
        return <p>Loading</p>
    }
    return <div className="weather">
        <div className="top">
            <div>
                <p className="city">{city.label}</p>
                <p className="weather-description">{currentWeather.weather[0].description}</p>
            </div>
            <img alt="weather" className="weather-icon" src={`icons/${currentWeather.weather[0].icon}.png`}/>
        </div>
        <div className="bottom">
            <p className="temperature">{Math.round(currentWeather.main.temp)}°</p>
            <div className="details">
                <div className="parameter-row">
                    <span className="parameter-label top">Details</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">
                        Feels like
                    </span>
                    <span className="parameter-value">
                        {Math.round(currentWeather.main.feels_like)} 
                    </span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">
                        Wind
                    </span>
                    <span className="parameter-value">
                        {currentWeather.wind.speed}
                    </span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">
                        Humidity
                    </span>
                    <span className="parameter-value">
                      {currentWeather.main.humidity} %
                    </span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">
                        Preasure
                    </span>
                    <span className="parameter-value">
                       {currentWeather.main.pressure/1000} kPa
                    </span>
                </div>
            </div>
        </div>
    </div>
}

export { CurrentWeather };