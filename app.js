const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

// Home page
app.get("/", (req, res) => {
  res.send("Hello from Azure CI/CD! Version 4 🎯");
});

// New /about page – this is our feature change
app.get("/about", (req, res) => {
  res.send("This app is deployed automatically from GitHub to Azure using CI/CD.");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
