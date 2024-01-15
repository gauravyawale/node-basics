const express = require("express");
const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send({ status: 200, message: "hi there 12" });
});

app.listen(port, () => {
  console.log("server started at posr: " + port);
});
