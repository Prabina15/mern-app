import { useEffect, useRef } from 'react';
import './App.css'
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import ComponentD from './components/ComponentD';
import ComponentE from './components/ComponentE';

function App() {
  const name = "Hari";

  const  myRef = useRef();

  useEffect(() => {
    console.log(myRef)
  }, []);
  
  return (

    <div>
      <h1 ref = {myRef}>Hello {name}</h1>
      <ComponentD />
      <ComponentE />
      <ComponentA label="A" />
      <ComponentA label="B" subtitle="Subtitle for component B" />
      <ComponentA subtitle="sub of some last component" />
      <ComponentA label="C" />
      <ComponentB />
      <ComponentC />
    </div>
  );
  
}

export default App;
