import React from "react";
import styles from "./App.module.scss";

import Details from "./Details";
import { useState } from "react";

// const title = "This my first title in React";

const isAuth = false;
const MENU = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Products",
        link: "/products",
    },
];

const App = () => {
    const [title, setTitle] = useState("Hello world");
    return (
        <div className={styles.layout}>
            <img src="/profile-pic.jpg" alt="Profile-picture.jpg" width={400} />
            {/* <br /> */}
            {/* {MENU.map((item) => (
                <a href={item.link} key={item.link}>
                    {item.name}
                </a>
            ))} */}

            <Details title={title} setTitle={setTitle} />

            {/* {isAuth ? <p>Person logged in</p> : <p>Pls log in</p>} */}
        </div>
    );
};

export default App;
