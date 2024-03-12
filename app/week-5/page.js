"use client";

export default function Page() {

    const dogs = [
        {   
            id: 1,
            name: "Corgelius", 
            breed: "Corgi", 
            age: 3, 
            imageUrl: "https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=600" 
        },

        { 
            id: 2,
            name: "Sleepy", 
            breed: "Brittany", 
            age: 5, 
            imageUrl: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600" 
        },

        { 
            id: 3,
            name: "Buddy", 
            breed: "Golden Retriever", 
            age: 2, 
            imageUrl: "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600" 
        }
    ]

    //sort the dogs by name
    dogs.sort((a, b) => a.name.localeCompare(b.name));
    
    // dogs.sort((a, b) => {
    //     if (a.name < b.name) {
    //         return -1
    //     }
    //     if (a.name > b.name) {
    //         return 1
    //     }
    //     return 0
    
    // });

    //filter list of dogs so that we don't have dog with id == 2
    const filteredDogs = dogs.filter((dog) => dog.id !== 2);

    const handleClick = (id) => {
        alert(id);
    }

    return (
        <div className="sm:bg-slate-500 md:bg-slate-700">
            <h1>Week 5 Dog Demo</h1>
            <ul>
                {dogs.map((dog) => (
                    <li key={dog.id} onClick={() => handleClick(dog.id)}>
                        <h2>{dog.name}</h2>
                        <p>{dog.breed}</p>
                        <p>{dog.age}</p>
                        <img src={dog.imageUrl} alt={dog.name} />
                    </li>
                ))}
            </ul>
        </div>
    )
}