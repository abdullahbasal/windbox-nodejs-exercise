const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.get("/getUsers", (req, res) => {
  const pikachu = {
    name: "Pikachu",
    power: "Lightning",
  };

  const squirtle = {
    name: "Squirtle",
    power: "Water",
  };

  const charmander = {
    name: "Charmander",
    power: "Fire",
  };

  res.json({ pikachu, squirtle, charmander });
});

app.listen(4000, () => {
  console.log(`Application listening on port 4000.`);
});
