"use client";

import dogData from "./dog-data.json";
import DogForm from "./dog-form";
import DogList from "./dog-list";
import { useState } from "react";

export default function Page() {

    const [dogs, setDogs] = useState(dogData);

    const addDog = (dog) => {
        setDogs([...dogs, dog]);
    }

    const deleteDog = (id) => {
        setDogs(dogs.filter((dog) => dog.id !== id));
    
    }

    return (
        <main>
            <h1>Week 6</h1>
           
            <DogList dogs={dogs} onDelete={deleteDog} />
            <DogForm onAddDog={addDog} />
        </main>
    );
}