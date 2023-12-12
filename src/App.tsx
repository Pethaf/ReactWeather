import { Search } from "./Components/Search/Search"
import { useState } from "react";
import { CurrentWeather } from "./Components/CurrentWeather/CurrentWeather";
import { ICity } from "./Interfaces/ICity";
import "./App.css";
function App() {
  const [city, setCity] = useState<ICity>();
  const handleOnSearch = (searchData:ICity):void => {
    setCity(searchData)
  }
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearch}/>
      {city && <CurrentWeather {...city}/>}
    </div>
  )
}

export default App
