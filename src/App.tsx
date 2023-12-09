import { Search } from "./Components/Search/Search"
import "./App.css";
function App() {
  const handleOnSearch = (searchData:any):void => {
    alert("Something")
    console.log(searchData)
  }
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearch}/>
    </div>
  )
}

export default App
