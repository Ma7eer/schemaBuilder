const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config(); // configure env variables

const port = process.env.PORT;

// routes
const schemaBuilderRouter = require("./routes/schemaBuilderRouter");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// use state files
app.use(express.static("public"));

app.set("view engine", "ejs");

app.use("/", schemaBuilderRouter);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
