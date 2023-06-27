const express = require('express');
const router = express.Router();
const perfumeController = require('../controllers/perfumeController');

router.get('/allPerfumes', perfumeController.getPerfumes);
router.get('/onePerfume', perfumeController.getOnePerfume);
router.get('/kos', perfumeController.kos);
router.post('/perfume', perfumeController.createPerfume);

module.exports = router;
