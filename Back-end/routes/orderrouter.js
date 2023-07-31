const express = require("express");
const router = express.Router();
const orderController = require("../controllers/ordercontroller");

router.post("/newOrder", orderController.newOrder);
router.get("/userOrders/:id", orderController.findUserOrders);
router.get("/ordersNumber", orderController.ordersNumber);

module.exports = router;
