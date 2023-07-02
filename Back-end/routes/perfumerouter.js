const express = require("express");
const router = express.Router();
const perfumeController = require("../controllers/perfumecontroller");

router.get("/allPerfumes", perfumeController.getPerfumes);
router.get("/onePerfume/:id", perfumeController.getOnePerfume);
router.get("/getFourPerfumes", perfumeController.getFourPerfumes);
router.post("/perfume", perfumeController.createPerfume);

module.exports = router;
