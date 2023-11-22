import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    fetch(`http://localhost:8080/`)
    .then((res)=>{
      return res.json()
    })
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
