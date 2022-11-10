const express = require("express");
const cocheController = require("../controllers/cocheController.js");

const router = express.Router();

router.get("/", cocheController.getAllCoches);
router.get("/:cocheId", cocheController.getOneCoche);
router.post("/", cocheController.createOneCoche);
router.put("/:cocheId", cocheController.updateOneCoche);
router.delete("/:cocheId", cocheController.deleteOneCoche);

module.exports = router;
