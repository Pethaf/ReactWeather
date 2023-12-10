const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/';
const GEO_API_OPTIONS = {
	method: 'GET',
	headers: {
		"X-RapidAPI-Key": `${import.meta.env.VITE_X_RapidAPI_Key}`,
		"X-RapidAPI-Host": `${import.meta.env.VITE_X_RapidAPI_Host}`
	}
};
const CITY_POPULATION_THRESHOLD = 1000000;

const fetchCityByName =(cityName:any) => {
	return fetch(`${GEO_API_URL}cities?minPopulation=${CITY_POPULATION_THRESHOLD}&namePrefix=${cityName}`, GEO_API_OPTIONS).
            then(response => response.json())
}

export {
	fetchCityByName
}