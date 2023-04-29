import React , {useState , useEffect} from 'react'
import axios from 'axios'
function StarWars() {
const [Number , NumberFunction] = useState(1)
const [Movie , SetMovie] = useState("")
let arr = [1,2,3,4,5,6,7]
useEffect(()=>{
    async function getData(){
        console.log(Number)
        const response = await axios.get(`https://swapi.dev/api/films/${Number}`);
        SetMovie(response.data)
    }
    getData();
},[Number])
  return (
    <div>
        <h2>Pick a Movie</h2>
        <select value={Number} onChange={ev => NumberFunction(ev.target.value)}>
            {arr.map((e) => {
            return <option value={e}>{e}</option>
            })}
        </select>
        <h2>{Movie.title}</h2>
        <h2>About:</h2>
        <p>{Movie.opening_crawl}</p>
    </div>
  )
}
export default StarWars