
import Dog from './dog';

export default function Page() {

    let dog1 = {
        name: "Fido",
        breed: "Golden Retriever",
        age: 5,
        color: "Golden",
    };

    let dog2 = {
        name: "Rex",
        breed: "German Shepherd",
        age: 3,
        color: "Brown",
    };

    let dog3 = {
        name: "Spot",
        breed: "Dalmation",
        age: 4,
        color: "White",
    };

    return (
      <main className="m-5">
        <h1 className="text-4xl font-bold">Week 3</h1>
        <p>These are my favorite dogs</p>
        <Dog {...dog1} />
        <Dog {...dog2} />
        <Dog {...dog3} />
        {/* <Dog name={dog1.name} breed={dog1.breed} age={dog1.age} color={dog1.color} /> */}
      </main>
    )
  
}