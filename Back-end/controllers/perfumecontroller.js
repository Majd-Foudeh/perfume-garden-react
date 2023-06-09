const perfume = require("../models/perfume");

// Create a new user
const createPerfume = async (req, res) => {
  try {
    const {
      perfume_name,
      perfume_category,
      price,
      description,
      perfume_picture,
    } = req.body;
    const newPerfume = new User({
      perfume_name: perfume_name,
      perfume_category: perfume_category,
      price: price,
      description: description,
      perfume_picture: perfume_picture,
    });
    await newPerfume.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

const getPerfumes = async (req, res) => {
  try {
    const products = await perfume.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "cannot get products" });
  }
};

const getFourPerfumes = async (req, res) => {
  try {
    const products = await perfume.aggregate([{ $sample: { size: 4 } }]);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Cannot get four products" });
  }
};

const getOnePerfume = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const myPerfume = await perfume.findById(id);
    res.status(200).json(myPerfume);
  } catch (error) {
    res.status(500).json({ error: "error in get one perfume " });
    console.error(error);
  }
};

module.exports = { createPerfume, getPerfumes, getOnePerfume, getFourPerfumes };
