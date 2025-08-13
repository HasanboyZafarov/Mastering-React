import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeting from "./Greeting";
import Card from "./Card";

function App() {
    return (
        <>
            <div>
                <Greeting name="Hasanboy" />
            </div>

            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
                perferendis expedita nesciunt impedit accusamus eos reiciendis
                soluta quo laborum suscipit quisquam, sed ullam vel id quae amet
                aliquid nam minus.
            </div>

            <Greeting name="Husanboy" />
        </>
    );
}

export default App;
