const express = require("express");
const app = express();
const port = 3000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/widgets", (req, res) =>
  res.json([...Array(10)].map((_, i) => ({ id: i + 1 })))
);

app.get("/new-widget", (req, res) =>
  res.json({ id: Math.floor(Math.random() * 100 + 1) })
);

app.listen(port, () =>
  console.log(`Dave's widget factory: ready for business`)
);
