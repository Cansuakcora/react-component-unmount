import {useState, useEffect} from 'react';

function Counter() {
  const [number,setNumber] = useState(0);
  const [name,setName]= useState('cansu');

  useEffect(() =>{
    console.log('state değiştiii');

    const intervaldene = setInterval(() => {
        setNumber((n) => n + 1);  // n:number değeri
    },3000);

    return () => clearInterval(intervaldene)

  } , [number])


  return (
    <div className="App">
       <h1>{number}</h1>
       <button onClick={() => setNumber(number + 1)}>click</button>

       <br/>
       <h1>{name}</h1>
       <button onClick={() => setName('seda')}>click</button>
    </div>
  );
}

export default Counter;
