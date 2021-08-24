const express = require("express");
const app = express();
const data = require("./data.json");
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>This the API homepage. Use /api to get JSON data</h1>");
});

app.get("/api", (req, res) => {
  const { headers, method, query, url } = req;
  const responseBody = { headers, method, query, url, data };
  res.json(responseBody);
});

app.listen(PORT, () => {
  console.log(`[INFO] Server now listening on port: ${PORT}`);
});
