const showSchemaBuilderPage = (req, res) => {
  res.render("page/index.ejs");
};

const postFormData = (req, res) => {
  console.log(req.body);
  res.redirect("/");
};

module.exports = {
  showSchemaBuilderPage,
  postFormData
};
