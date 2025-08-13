import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link to={"/cart"}>Cart </Link>
            <Link to={"/app"}>App</Link>
        </div>
    );
};

export default Navbar;
