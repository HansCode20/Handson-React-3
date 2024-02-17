import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [menu, setMenu] = useState([]);

  const getMenuData = () => {
    axios
      .get("https://api.mudoapi.tech/menus")
      .then((res) => setMenu(res.data.data.Data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getMenuData();
  }, []);

  console.log("menus");
  return (
    <div>
      {menu.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <img
            src={item.imageUrl}
            alt={item.name}
            style={{ width: "500px", height: "auto" }}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
