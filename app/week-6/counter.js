"use client";

import { useState } from "react";

export default function Counter() {
    let [count, setCount] = useState(0);
    
    const increment = () => {
        // count++;
        // alert(count);

        //setCount(count + 1);
        //setCount(count + 1); // This will not work as expected because setCount is asynchronous
        
        setCount( (prev) => prev + 1 );
        setCount( (prev) => prev + 1 ); // This will work as expected because we are using the previous value to calculate the new value
    }

    return (
        <main>
            <h2>Counter</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>

        </main>
        
    );
}