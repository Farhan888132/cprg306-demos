"use client";

import { useState } from "react";

export default function DogForm() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({name, breed, age});
        alert("name: " + name + "\n" + "breed: " + breed + "\n" + "age: " + age)
        
    }

    return(
        <div>

            <h2>Add a Dog</h2>

            <form onSubmit={handleSubmit}>

            <label>
                Name:{""}
                <input  className="text-black" type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </label>

            <label>
                Breed:{""}
                <input className="text-black" type="text" value={breed} onChange={(event) => setBreed(event.target.value)} />
            </label>

            <label>
                Age:{""}
                <input className="text-black" type="number" value={age} onChange={(event) => setAge(event.target.value)} />
            </label>
            <br></br>
            <button className="w-24 bg-blue-600 rounded-lg hover:bg-blue-900 active:bg-red-600" type="submit">Submit</button>
            </form>
            

        </div>
    );
}