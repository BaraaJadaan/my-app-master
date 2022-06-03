import './App.css';
import Home from "./Pages/Home";
import ProductPage from "./Pages/ProductPage";


import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductList/details/:id" element={<ProductPage />} />
          <Route path="/ProductList/details" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
