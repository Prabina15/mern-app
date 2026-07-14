import {useEffect, useState} from 'react'

function ComponentB() {
      const [result, setResult]= useState("dark");// returns array, first element state value, second element function 

      useEffect (
        // function
        () => {
        console.log("hello from useEffect");

        return () => {
            //destroy cleanp
        
        };
        // dependency array (state varibale)
        },
         [result],

    );
  
  return (
    <div>
        <h2> state: {result}</h2>
        <button onClick={() => setResult("light")}>Update State</button>
    </div>
  )
}

export default ComponentB;