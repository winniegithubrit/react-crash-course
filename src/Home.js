
import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import AddAnimal from "./AddAnimal";
import UpdateAnimal from "./UpdateAnimal";
function Home() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/animals")
      .then((response) => response.json())
      .then((data) => {
        setAnimals(data);
      });
  }, []);
function  handleUpdateFunctionality(updatedAnimal){
const updatedAnimals = animals.map(animal => {
      if (animal.id === updatedAnimal.id) {
        return updatedAnimal;
      } else {
        return animal;
      }
    });
    setAnimals(updatedAnimals);
}


  const handleDelete = (id) => {
    fetch(`http://localhost:3000/animals/${id}`, {
      method: "DELETE",
    }).then(() => {
      setAnimals(animals.filter((animal) => animal.id !== id));
    });
  };

  return (
    <div>
      <h1>Welcome to the Home page!</h1>
      <p>This is some sample text.</p>
      <div className="animal-card" style={{ color: "blue", background: "yellow" }}>
        {animals.map((animal) => {
          return (
            <div key={animal.id}>
              <Link to={`/dogs/${animal.name}`}>
                <img src={animal.image} alt={animal.name} />
              </Link>
              <h3>NAME:{animal.name}</h3>
              <h3>BREED:{animal.breed}</h3>
              <h3>AGE:{animal.age}</h3>
              <h3>SPECIES:{animal.species}</h3>
              <button onClick={() => handleDelete(animal.id)}>DELETE</button>
            </div>
          );
        })}
      </div>
       <AddAnimal animals={animals} setAnimals={setAnimals}/>
       <UpdateAnimal animals={animals}onUpdate={handleUpdateFunctionality}/>
    
    </div>
  );
}

export default Home;
