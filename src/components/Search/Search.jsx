import queryString from "query-string"
import { useHistory } from "react-router-dom"

export default function Search() {

  // history has a location object with the search string
  const history = useHistory();
  

  
  return (
    <div>
      <h1>Search</h1>
      <pre>{JSON.stringify(history.location.search)}</pre>
      <h2>with queryString</h2>
      <pre>{JSON.stringify(queryString.parse(history.location.search))}</pre>
    </div>
  )


}