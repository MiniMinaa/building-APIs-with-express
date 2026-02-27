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
