import Heading from './heading.js';

export default function Page()
  {
    let a =5;
    let b=10;
    let c=a+b;
    return (
    <main>
      <Heading />
      <p>The sum of a and b is {c}.</p>
    </main>
    );
  }

  