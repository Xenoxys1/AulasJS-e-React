import { BrowserRouter, Routes, Route } from "react-router";
import { Cart } from "./pages/cart";
import { Home } from "./pages/home";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
