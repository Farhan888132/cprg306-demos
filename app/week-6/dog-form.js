"use client";

import { useState } from "react";

export default function DogForm({onAddDog}) {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();

        const newId = Math.floor(Math.random() * 1000000);
        const newDog = {id: newId, name, age};
        onAddDog(newDog);

        console.log({name, age});
    }

    return(
        <div>

            <h2>Add a Dog</h2>

            <form onSubmit={handleSubmit}>

            <label>
                Name:{""}
                <input  className="text-black" type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </label>
            <br></br>

            <label>
                Age:{""}
                <input className="text-black" type="number" value={age} onChange={(event) => setAge(event.target.value)} />
            </label>
            <br></br>

            <button className="w-24 bg-blue-600 rounded-lg hover:bg-blue-900 active:bg-red-600" type="submit">Add</button>
            </form>
            

        </div>
    );
}