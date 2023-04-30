// import React,{useState} from "react";
// function UpdateAnimal({animal,onUpdate}){
//   const [formData,setFormData]=useState({
//     // name:animal.name,
//     // breed:animal.breed,
//     // age:animal.age,
//     // species:animal.species,
//     // image:animal.image,
//      name: animal ? animal.name : '',
//     breed: animal ? animal.breed : '',
//     age: animal ? animal.age : '',
//     species: animal ? animal.species : '',
//     image: animal ? animal.image : '',
//   })
//   function handleSubmit(event){
//     event.preventDefault()
//     const updatedAnimal={
//       id:animal?animal.id:'',
//       name:formData.name,
//       breed:formData.breed,
//       age:formData.age,
//       species:formData.species,
//       image:formData.image,
//     }
//     if (animal){
//     fetch(`http://localhost:3000/animals/${animal.id}`,{
//     method:"PUT",
//     headers:{
//      " Content-Type":"application/json"
//     },
//     body: JSON.stringify(updatedAnimal)
//     })
//     .then((response)=>response.json())
//     .then((data)=>{
//       onUpdate(data)
//     })
//   }
// }
//   return(
//     <div className="update">
// <form className="updater" onSubmit={handleSubmit} >
//   <br/>
// <label type="text">ANIMAL-NAME</label>
//         <input type="text" id="name" value={formData.name}
//         onChange={(e)=>setFormData({...formData,name:e.target.value})}
//         /><br/>
//          <label type="text">ANIMAL-BREED</label>
//         <input type="text" id="breed" value={formData.breed} onChange={(e)=>setFormData({...formData,breed:e.target.value})}/>
//         <br/>
//          <label type="text">ANIMAL-AGE</label>
//         <input type="text" id="age" value={formData.age} onChange={(e)=>setFormData({...formData,age:e.target.value})}/>
//          <br/>
//          <label type="text">ANIMAL-SPECIES</label>
//         <input type="text" id="species" value={formData.species} onChange={(e)=>setFormData({...formData,species:e.target.value})}/>
//         <br/>
//         <label type="image" >ANIMAL-IMAGE</label>
//           <input type="text" id="image" value={formData.image}onChange={(e)=>setFormData({...formData,image:e.target.value})}/>
//           <img src="" alt=""/>
//           <br/>
//           <button type="submit">UPDATE ANIMAL</button>
//    </form>
   
   

//     </div>
//   )
// }
// export default UpdateAnimal
import React, { useState } from "react";

function UpdateAnimal({ animal, onUpdate }) {
  const [formData, setFormData] = useState({
    name: animal ? animal.name : "",
    breed: animal ? animal.breed : "",
    age: animal ? animal.age : "",
    species: animal ? animal.species : "",
    image: animal ? animal.image : "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    const updatedAnimal = {
      id: animal ? animal.id : "",
      name: formData.name,
      breed: formData.breed,
      age: parseInt(formData.age),
      species: formData.species,
      image: formData.image,
    };

    if (animal) {
      fetch(`http://localhost:3000/animals/${animal.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedAnimal),
      })
        .then((response) => response.json())
        .then((data) => {
          onUpdate(data);
        });
    }
  }

  return (
    <div className="update">
      <form className="updater" onSubmit={handleSubmit}>
        <br />
        <label>ANIMAL-NAME</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />
        <br />
        <label>ANIMAL-BREED</label>
        <input
          type="text"
          id="breed"
          value={formData.breed}
          onChange={(e) =>
            setFormData({ ...formData, breed: e.target.value })
          }
        />
        <br />
        <label>ANIMAL-AGE</label>
        <input
          type="number"
          id="age"
          value={formData.age}
          onChange={(e) =>
            setFormData({ ...formData, age: e.target.value })
          }
        />
        <br />
        <label>ANIMAL-SPECIES</label>
        <input
          type="text"
          id="species"
          value={formData.species}
          onChange={(e) =>
            setFormData({ ...formData, species: e.target.value })
          }
        />
        <br />
        <label>ANIMAL-IMAGE</label>
        <input
          type="text"
          id="image"
          value={formData.image}
          onChange={(e) =>
            setFormData({ ...formData, image: e.target.value })
          }
        />
        <img src="" alt="" />
        <br />
        <button type="submit">UPDATE ANIMAL</button>
      </form>
    </div>
  );
}

export default UpdateAnimal;
