
import React,{useState,useEffect} from "react";
function Search(){
  useEffect(()=>{
    fetch("http://localhost:3000/animals")
    .then((response)=>response.json())
    .then((data)=>{
      setData(data)
      SetFilteredData(data)
    })
  },[])
  const[data,setData]=useState([])
  const [filteredData,SetFilteredData]=useState([])
  function handleFilter(value){
const result=filteredData.filter(datum=>datum.includes(value))
  }
  return(
    <div className="search">
<input type="text" placeholder="search here..." onChange={e=>handleFilter(e.target.value)}/>
<button>SEARCH-ANIMAL</button>

    </div>
  )
}
export default Search