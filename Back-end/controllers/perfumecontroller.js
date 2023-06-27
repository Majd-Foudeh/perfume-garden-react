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

const kos=(req,res)=>{
  res.send("kooos omk")

}

const getPerfumes = async (req, res) => {
  try {
    const products = await perfume.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "cannot get products" });
  }
};


const getOnePerfume = (req, res) => {
  try {
    const id = req.params.id;
    const myPerfume = perfume.findById(id);
    res.status(200).json(myPerfume);
  } catch (error) {
    res.status(500).json({ error: "error in get one perfume " });
    console.error(error);
  }
};

module.exports = {  createPerfume, getPerfumes,getOnePerfume,kos };
