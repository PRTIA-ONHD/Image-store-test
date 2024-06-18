import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/authentication/Login";
import Register from "./page/authentication/Register";
import Product from "./page/authentication/Product";
import Details from "./page/authentication/Details";
import Cart from "./page/authentication/Cart";

//import { Nav } from "./component/Navbar/navbar";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);