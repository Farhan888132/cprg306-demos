"use client";

import { useState } from "react"

export default function Counter(){

    const [count, setCount] = useState(0);

    // count is the current value of the state
    // setCount is the function to update the state

    const increment = () => {
        setCount(count + 1);
    }

    // never do this to increment count : const increment = () => count++;

    return (
        <div>
            <p>Week 4 Interactivity</p>
            <p>counter: {count}</p>
            {count > 5 && <p>counter is greater than 5</p>}
            {count === 3 ? <p>counter is 3</p> : <p>counter is not 3</p>}
            <button className="w-24 bg-blue-600 rounded-lg hover:bg-blue-900 active:bg-red-600" onClick={increment}>increment</button>
        </div>
    );
}