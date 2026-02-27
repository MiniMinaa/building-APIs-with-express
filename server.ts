import express from "express";
const app = express();

//set the port
const PORT = 3000;

//set up a basic route
app.get("/", (req, res) => {
  res.send("Welcome to our API!");
});

// start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:3000/.`);
});

app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 1, name: "Jane Smith" },
  ];
  res.json(users);
});

app.use(express.json());

app.post("/users", (req, res) => {
  const newUser = req.body;
  console.log(newUser);
  res.json({ message: "User added successfully!", user: newUser });
});

// practice
app.get("/greet", (req, res) => {
  res.send("Hello developer!");
});

app.post("/submit", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  res.send(`Hello, ${name}! You are ${age} years old.`);
});
