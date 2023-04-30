import React,{useState} from "react";
function AddAnimal({animals,setAnimals}){
  const [formData,setFormData]=useState({
    name:"",
    breed:"",
    age:"",
    species:"",
    image:"",

  })
 function handleSubmit(e) {
  e.preventDefault();

  const newAnimal = {
    name: formData.name,
    breed: formData.breed,
    age: formData.age,
    species: formData.species,
    image: formData.image,
  };

  fetch("http://localhost:3000/animals", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newAnimal),
  })
  .then((response) => response.json())
  .then((data) => {
    setAnimals([...animals, data]);
    setFormData({
      name: "",
      breed: "",
      age: "",
      species: "",
      image: "",
    });
  })
 
}

  console.log(formData)
 // console.log(setFormData)
  return(
    <div className="add-animal">
      <form className="animal-form" >
        ADDING ANIMAL DATA
        <br/>
        <label type="text">ANIMAL-NAME</label>
        <input type="text" id="name" value={formData.name}
        onChange={(e)=>setFormData({...formData,name:e.target.value})}
        /><br/>
         <label type="text">ANIMAL-BREED</label>
        <input type="text" id="breed" value={formData.breed} onChange={(e)=>setFormData({...formData,breed:e.target.value})}/>
         <br/>
         <label type="number">ANIMAL-AGE</label>
        <input type="text" id="age" value={formData.age} onChange={(e)=>setFormData({...formData,age:e.target.value})}/>
         <br/>
         <label type="text">ANIMAL-SPECIES</label>
        <input type="text" id="species" value={formData.species} onChange={(e)=>setFormData({...formData,species:e.target.value})}/>
       <br/>
        <label type="image" >ANIMAL-IMAGE</label>
          <input type="text" id="image" value={formData.image}onChange={(e)=>setFormData({...formData,image:e.target.value})}/>
          <img src="" alt=""/>
          <br/>
   </form>
   <button type="submit" onClick={handleSubmit}>ADD ANIMAL</button>
    </div>
  )
}
export default AddAnimal