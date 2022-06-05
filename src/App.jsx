import './App.css';
import Home from "./Pages/Home";
import ProductPage from "./Pages/ProductPage";
import NavBar from './components/NavBar';
import LoginSignUp from "./Pages/LoginSignUp/LoginSignUp"
import ProductList from './Pages/ProductList';
import Cart from './Pages/Cart/Cart';
import { Cartiteme } from "./components/data";
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
 
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <BrowserRouter>
      {/* <NavBar/> */}
        <Routes>
          <Route path="/" element={<Home onAdd={onAdd}/>} />
          <Route exact path="/Login" element={<LoginSignUp />} />
          <Route exact path="/cart" element={<Cart onAdd={onAdd} onRemove={onRemove}  cartItems={cartItems} />} />
          <Route exact path="/ProductList" element={<ProductList onAdd={onAdd} />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
