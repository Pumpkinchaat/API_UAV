const express = require("express");
const app = express();
const data = require("./data.json");
const PORT = 3456;

app.use((req, res) => {
  const { headers, method, query, url } = req;
  const responseBody = { headers, method, query, url, data };
  //   res.json(responseBody);
  res.send("<h1>This is a test</h1>");
});

app.listen(PORT, () => {
  console.log(`[INFO] Server now listening on port: ${PORT}`);
});
