"use client";
import {useState, useEffect} from "react";

async function getRandomDog() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    return data.message;
}

async function getBreedList() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    return data.message;
}

export default function Page() {

    const [dogUrl, setDogUrl] = useState(null);
    const [breedList, setBreedList] = useState(null);

    const loadRandomDog = async () => {
        const url = await getRandomDog();
        setDogUrl(url);
    }

    const loadBreedList = async () => {
        // const breedListObject = await getBreedList();
        // const breedList = Object.keys(breedListObject);
        // setBreedList(breedList);
    };

  const changeBreed = async (event) => {
    // const breed = event.target.value;
    // const response = await fetch(
    //   `https://dog.ceo/api/breed/${breed}/images/random`
    // );
    // const data = await response.json();
    // setDogUrl(data.message);
  };

useEffect(() => {
    loadRandomDog(); 
    // loadBreedList();
}, []);

    return (
        <main>
            <h1>Week 7</h1>
            <p>Random dog</p>
            <img src={dogUrl} alt="Random dog" />
            <p>Breed list</p>
            <div>
                <select name="breed" className="text-black" onChange={changeBreed}>
                {breedList &&
                    breedList.map((breed) => (
                    <option key={breed} value={breed}>
                        {breed}
                    </option>
                    ))}
                </select>
            </div>
        </main>
    )
}