import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.modules.css";

const products = [
    { title: "Olma", isFruit: true, id: 1 },
    { title: "Nok", isFruit: true, id: 2 },
    { title: "Tomato", isFruit: false, id: 3 },
];

function App() {
    const listItems = products.map((item) => (
        <li key={item.id} style={{ color: item.isFruit ? "red" : "green" }}>
            {item.title}
        </li>
    ));
    return (
        <div >
            <ul>{listItems}</ul>
        </div>
    );
}

export default App;
