const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi personal girls");
});

const users = [
  { id: 1, name: "Riya", email: "riya@email.com", phone: "01788446622" },
  { id: 2, name: "Rini", email: "rini@email.com", phone: "01838202144" },
  { id: 3, name: "Sara", email: "sara@email.com", phone: "01738446745" },
  { id: 4, name: "Priti", email: "priti@email.com", phone: "01718436622" },
];

app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => +id === user.id);
  res.send(user);
});

app.post("/user", (req, res) => {
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.get("/players", (req, res) => {
  res.send(["neymar", "messi", "sandro", "kaka"]);
});

app.get("/players/neymar/skills", (req, res) => {
  res.send("90%");
});

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
