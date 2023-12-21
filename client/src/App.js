import { useEffect, useState } from "react";

import "./App.css";
import Charmander from "./assets/images/charmander.png";
import Squirtle from "./assets/images/squirtle.png";
import Pokeball from "./assets/images/pokeball.png";
import Pikachu from "./assets/images/pikachu.png";

import WinBox from "react-winbox";
function App() {
  const [data, setData] = useState([]);
  const [pikachu, setPikachu] = useState(false);
  const [squirtle, setSquirtle] = useState(false);
  const [charmander, setCharmander] = useState(false);
  useEffect(() => {
    fetch("http://localhost:4000/getUsers")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Status Code: ${response.status}`);
        }

        return response.json();
      })
      .then((data) => {
        console.log("data :", data);
        setData(data);
      })
      .catch((error) => {
        console.error("Error Message :", error.message);
      });
    console.log(data);
  }, []);
  return (
    <div className="page-content">
      <div className="logo">
        <img src={Pokeball} alt="Pokeball" />
      </div>
      <h1>Please click for information</h1>
      <div className="container">
        <div className="image-div" onClick={() => setPikachu(true)}>
          <img src={Pikachu} alt="Pikachu" />
          &nbsp;{data?.pikachu?.name ?? "-"}
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="image-div" onClick={() => setSquirtle(true)}>
          <img src={Squirtle} alt="Squirtle" />
          &nbsp;{data?.squirtle?.name ?? "-"}
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="image-div" onClick={() => setCharmander(true)}>
          <img src={Charmander} alt="Charmander" />
          &nbsp;{data?.charmander?.name}
        </div>

        {pikachu && (
          <WinBox
            width={600}
            height={400}
            x="center"
            y={30}
            title={data?.pikachu?.name}
            onClose={() => setPikachu(false)}
            background="#FF9800"
          >
            <div>
              <div className="field">
                <p className="title">Name : </p>
                <p className="description">
                  &nbsp;{data?.pikachu?.name ?? "-"}
                </p>
              </div>
              <div className="field">
                <p className="title">Power : </p>
                <p className="description">
                  &nbsp;{data?.pikachu?.power ?? "-"}
                </p>
              </div>
            </div>
          </WinBox>
        )}

        {squirtle && (
          <WinBox
            width={600}
            height={400}
            x="center"
            y={30}
            title={data?.squirtle?.name}
            onClose={() => setSquirtle(false)}
            background="#30d5c8"
          >
            <div>
              <div className="field">
                <p className="title">Name : </p>
                <p className="description">
                  &nbsp;{data?.squirtle?.name ?? "-"}
                </p>
              </div>
              <div className="field">
                <p className="title">Power : </p>
                <p className="description">
                  &nbsp;{data?.squirtle?.power ?? "-"}
                </p>
              </div>
            </div>
          </WinBox>
        )}
        {charmander && (
          <WinBox
            width={600}
            height={400}
            x="center"
            y={30}
            title={data?.charmander?.name}
            onClose={() => setCharmander(false)}
            background="#ff0000"
          >
            <div>
              <div className="field">
                <p className="title">Name : </p>
                <p className="description">
                  &nbsp;{data?.charmander?.name ?? "-"}
                </p>
              </div>
              <div className="field">
                <p className="title">Power : </p>
                <p className="description">
                  &nbsp;{data?.charmander?.power ?? "-"}
                </p>
              </div>
            </div>
          </WinBox>
        )}
      </div>
    </div>
  );
}

export default App;
