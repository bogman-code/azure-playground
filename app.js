const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
app.listen(port);
app.get("/", (req, res) => {
  res.send("Hello from Azure CI/CD! Version 3 🚀");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
