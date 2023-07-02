// const order = require("../models/order");

// const newOrder = async (req, res) => {
//   try {
//     const { userId, products, total, shippingAddress } = req.body;

//     const newOrder = new order({
//       userId: userId,
//       products: products,
//       total: total,
//       shippingAddress: shippingAddress,
//     });

//     const savedOrder = await newOrder.save();
//     res
//       .status(201)
//       .json(savedOrder, { message: "order saved to database successfully" });
//   } catch (error) {
//     res
//       .status(500)
//       .json(
//         { message: "error in save the order info in database" },
//         error.message
//       );
//   }
// };

const Order = require("../models/order");

const newOrder = async (req, res) => {
  try {
    const { userId, products, total, shippingAddress } = req.body;

    const newOrder = new Order({
      userId: userId,
      products: products,
      total: total,
      shippingAddress: shippingAddress,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json({
      message: "Order saved to the database successfully",
    });
  } catch (error) {
    res.json({
      message: "Error in saving the order info in the database",
      error: error.message,
    });
  }
};

const findUserOrders = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const orders = await Order.find({ userId: id });
    res.json(orders);
  } catch (error) {
    res.status(500).json({
      message: "error in fetch user previous orders",
      error: error.message,
    });
  }
};
module.exports = { newOrder, findUserOrders };
