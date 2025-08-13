import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Cart from "./cart.jsx";
import Card from "./Card.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Navbar />
        <Card />
        <App />

        <Routes>
            <Route path="/cart" element={<Cart></Cart>} />
            <Route path="/app" element={<App></App>} />
        </Routes>
    </BrowserRouter>
);
