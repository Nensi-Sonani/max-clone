

import logo from './logo.svg';
import Allroute from './router/Allroute'
import Nav from './components/Nav'

import './App.css';
import Product from './pages/Product';
import Cart from './pages/Cart';
import 'bootstrap/dist/css/bootstrap.min.css'
import ZoomSlider from './components/ZoomSlider';
import { ProductDetail } from './pages/ProductDetail';

function App() {
  return (
    <div className="App">
      <Nav/>
     <Allroute/>
    </div>

  );
}

export default App;
