const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

app.post("/data", (req, res) => {
  res.json({
    message: "Data received",
    data: req.body
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
