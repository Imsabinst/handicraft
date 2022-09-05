import { Route, Routes, Navigate } from "react-router-dom";
import Product from "./pages/product";
import Cart from "./pages/cart";
import Home from "./pages/home";
import Login from "./pages/login";
import ProductList from "./pages/productList";
import Register from "./pages/register";
import Success from "./pages/success";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </div>
  );
}

export default App;
