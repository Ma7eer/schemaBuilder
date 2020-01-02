// controller

const fs = require("fs");

const showSchemaBuilderPage = (req, res) => {
  res.render("page/index.ejs");
};

const postFormData = (req, res) => {
  let schemaName = req.body.schemaName ? req.body.schemaName : "";

  fs.writeFile(
    `./models/${schemaName}.js`,
    `console.log(${schemaName})`,
    err => {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    }
  );
  res.redirect("/");
};

module.exports = {
  showSchemaBuilderPage,
  postFormData
};
