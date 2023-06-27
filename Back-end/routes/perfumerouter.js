const express = require("express");
const router = express.Router();
const perfumecontroller = require("../controllers/perfumecontroller");

router.get("/perfume", perfumecontroller.allPerfumes);
router.get("/onePerfume", perfumecontroller.getOnePerfume);
router.post("/perfume", perfumecontroller.createPerfume);
