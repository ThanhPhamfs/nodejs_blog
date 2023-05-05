const { engine } = require("express-handlebars");
const express = require("express");
const morgan = require("morgan");
const path = require("path");


const app = express();
const port = 3003;

// Use static file
app.use(express.static(path.join(__dirname, 'public')))

// HTTP Logger
app.use(morgan("combined"));

// Template engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Route
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
