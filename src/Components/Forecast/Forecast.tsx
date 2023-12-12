import { Accordion, AccordionItem, AccordionItemPanel, AccordionItemHeading, AccordionItemButton } from "react-accessible-accordion";
import { ICity } from "../../Interfaces/ICity";
import { useState, useEffect } from "react";
import { fetchWeatherForecast } from "../../Services/Weather";
import "./Forecast.css";
const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const Forecast = (city: ICity) => {
    const dayInWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInWeek));
    const [loading, setIsLoading] = useState(true);
    const [forecastData, setForecastData] = useState({});
    const [isError, setIsError] = useState(false);
    const coordinates = city.value.split(" ");
    useEffect(() => {
        fetchWeatherForecast({ latitude: coordinates[0], longitude: coordinates[1] }).then(result => {
            setForecastData(result)
            setIsLoading(false);
        }).catch(err => {
            console.log(err)
            setIsError(true)
        })
    }, [city.value])
    if (isError) {
        return <p>Something Went Wrong</p>
    }
    if (loading) {
        return <p>Loading</p>
    }
    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {forecastData.list.slice(0, 7)
                    .map((data: any, index: any) => {
                        return (<AccordionItem key={data.dt}>

                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div className="daily-item">
                                        <img
                                            alt="weather"
                                            className="icon-small"
                                            src={`icons/${data.weather[0].icon}.png`}>
                                        </img>
                                        <p className="day">{forecastDays[index]}</p>
                                        <p className="description">{data.weather[0].description}</p>
                                        <p className="min-max">{Math.round(data.main.temp_min)}°C/{" "}{Math.round(data.main.temp_max)}°C</p>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="daily-details-grid">
                                    <div className="daily-details-grid-item">
                                        <p>Pressure</p>
                                        <p>{data.main.pressure/1000} kPa</p>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <p>Humidity</p>
                                        <p>{data.main.humidity} %</p>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <p>Clouds</p>
                                        <p>{data.clouds.all} %</p>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <p>Wind speed:</p>
                                        <p>{data.wind.speed} m/s</p>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <p>Sea Level</p>
                                        <p>{data.main.sea_level} m</p>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <p>Feels Like</p>
                                        <p>{Math.round(data.main.feels_like)}°C</p>
                                    </div>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>)
                    })}
            </Accordion>
        </>
    )
}

export { Forecast }