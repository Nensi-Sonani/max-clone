import Allroute from './router/Allroute'
import Nav from './components/Nav'

import './App.css';

import { useEffect } from 'react';

import Product from './pages/Product';
import Cart from './pages/Cart';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ProductDetail } from './pages/ProductDetail';
import Footer from './components/Footer';

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
      

      <Nav/>
     <Allroute/>
<Footer/>
    </div>

  );
}

export default App;
