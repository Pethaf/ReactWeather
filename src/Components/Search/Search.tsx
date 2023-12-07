import {  useState } from "react"
import { OptionsOrGroups, GroupBase } from "react-select"
import { AsyncPaginate, Response } from "react-select-async-paginate"
const Search = (onSearchChange:any) => {
    const [search,setSearch] = useState(null)
    const handleOnChange = (searchData:any):void => {
        setSearch(searchData)
        onSearchChange(searchData)
    }
    return (
    <AsyncPaginate 
            placeholder="Search For City"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange} loadOptions={function (inputValue: string, options: OptionsOrGroups<null, GroupBase<null>>, additional?: unknown): Response<null, GroupBase<null>, unknown> | Promise<Response<null, GroupBase<null>, unknown>> {
                throw new Error("Function not implemented.")
            }} />
    )
}

export {Search}