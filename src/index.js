const bodyParser = require("body-parser");
const { json } = require("express");
const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 8080;

app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.json());

const cochesRouter = require("./routes/cocheRoutes");
app.use("/api/coches", cochesRouter);

//Testing
app.get("/", (req, res) => {
  res.send("<h2>It's Working</h2>");
});

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
