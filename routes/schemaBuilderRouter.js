const express = require("express");
const router = express.Router();

// controllers
const controllers = require("../controller/schemaBuilder");

router.get("/", controllers.showSchemaBuilderPage);
router.post("/", controllers.postFormData);

module.exports = router;
