import "./App.scss";
// react router v6
import { Routes, Route } from "react-router-dom";
// pages
import {
  Home,
  CategoryProduct,
  ProductSingle,
  Cart,
  Search,
} from "./pages/index";
// components
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Nomatch from "./pages/No match error/Nomatch";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Sidebar />

      <Routes>
        {/* home page route */}
        <Route path="/" element={<Home />} />
        {/* single product route */}
        <Route path="/product/:id" element={<ProductSingle />} />
        {/* category wise product listing route */}
        <Route path="/category/:category" element={<CategoryProduct />} />
        {/* cart */}
        <Route path="/cart" element={<Cart />} />
        {/* searched products */}
        <Route path="/search/:searchTerm" element={<Search />} />
        {/* Page Not Found */}
        <Route path="*" element={<Nomatch />} />
      </Routes>
    </div>
  );
}

export default App;
