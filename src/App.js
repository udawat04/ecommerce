import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Layout from "./Components/Layout/Layout";
import Contact from "./Components/Pages/Contact";
import Login from "./Components/Pages/Login";
import Addcart from "./Components/Pages/Addcart";
import WishList from "./Components/Pages/WishList";
import Product1 from "./Components/Modules/Product1";
import Products from "./Components/Modules/Products";
// import LearnHooks from "./Components/Modules/LearnHooks";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Addcart />} />
            <Route path="/wish" element={<WishList />} />
            <Route path="/product" element={<Product1 />} />
            <Route path="/product1" element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
