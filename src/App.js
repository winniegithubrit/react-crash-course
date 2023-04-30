// import React,{useState} from "react";
// import User from "./User"

// function App() {
  
//   const [ager,setAger]=useState(0)
//   const [namer,setNamer]=useState({firstName:"",lastName:""})
//   const[items,setItems]=useState([])
//   function handleAge(){
//    return(setAger(ager+1))
//   }
//   function handleItem(){
// setItems([...items,{
//   id:items.length,
//   value:Math.floor(Math.random() * 10 ) + 1
// }])
//   }
//   console.log(ager)
//   const code =15
//   const girls=["winnie","veronica","mary","whitney","gisselle","ariana","favour","mitchelle","nathalie"]
//   return (
//     <div className="App">
//       <button onClick={handleItem}>ADD-ITEM</button>
//       <ul>
//         {
//           items.map((item)=>(<li key={item.id}>{item.value}</li>
//            ) )
//         }
//       </ul>
//       <form>
//         <input type="text" value={namer.firstName}
//         onChange={e=>setNamer({...namer, firstName: e.target.value})}/>
//         <input type="text" value={namer.lastName}
//         onChange={e=>setNamer({...namer,lastName:e.target.value})}/>
//       </form>
//       <h2>Your firstName is-{namer.firstName}</h2>
//       <h2>Your lastName is-{namer.lastName}</h2>
//       {girls.map((girl,key)=>{
// return <h1 key={key}>{girl}</h1>
//       })}
//       <User/>
// <User name="Elianna" age={21} work="Fashion designer"/>
// <User name="Yemi" age={26} work="Music Producer"/>
// {code>=20?<h1>CORRECT CODE</h1>:<h1>INCORRECT CODE</h1>}
// {ager}
// <button onClick={handleAge}>AGE-BTN</button>
//      </div>
//   );
// }

// export default App;
import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Dog from "./Dog";
import Search from "./Search";

import './App.css'
function App() {
  return (
    <div className="app">
       <Search />
      <BrowserRouter>
        <Route path="/" component={Home}></Route>
        <Route path="/dogs/:name" component={Dog} ></Route>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
