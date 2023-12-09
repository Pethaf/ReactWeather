import { useState } from "react"
import { OptionsOrGroups, GroupBase } from "react-select"
import { AsyncPaginate } from "react-select-async-paginate"
import { fetchCityByName } from "../../Services/Search"
const Search = ({ onSearchChange }: any) => {
    const [search, setSearch] = useState(null)
    const handleOnChange = (searchData: any): void => {
        setSearch(searchData)
        onSearchChange(searchData)
    }
    const loadOptions = (inputValue: string) => {
        return fetchCityByName(inputValue).
            then(response => {
                const options = response.data.map((city: any) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name} ${city.countryCode}`
                    }
                })
                return {
                    options
                };
            }).catch(err => console.log(err))    
        }
    return (
        <AsyncPaginate
            placeholder="Search For City"
            debounceTimeout={1000}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions} />
    )
}

export { Search }