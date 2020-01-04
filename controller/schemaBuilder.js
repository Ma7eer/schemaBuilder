// controller

const fs = require("fs");

const schemaDataTypes = require("../data/schemaDataTypes");

const showSchemaBuilderPage = (req, res) => {
  res.render("page/index.ejs", { schemaDataTypes });
};

const postFormData = (req, res) => {
  let data = {
    schemaName: req.body.schemaName ? req.body.schemaName : "",
    schemaItems: req.body.schemaItems ? [...req.body.schemaItems] : []
  };

  let fileName = `./models/${data.schemaName}.js`;
  let fileContent = `console.log(${data.schemaName})`;

  fs.writeFile(fileName, fileContent, err => {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
  res.redirect("/");
};

module.exports = {
  showSchemaBuilderPage,
  postFormData
};
