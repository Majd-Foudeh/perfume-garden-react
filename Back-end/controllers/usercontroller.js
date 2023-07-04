const user = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

function jwttoken({ first_Name, last_Name, user_email }) {
  const userdata = { first_Name, last_Name, user_email };
  const token = jwt.sign(userdata, process.env.ACCESS_TOKEN_SECRET);

  return token;
}

const allusers = (req, res) => {
  user
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const adduser = async (req, res) => {
  try {
    const {
      first_Name,
      last_Name,
      user_email,
      user_password,
      user_phoneNumber,
    } = req.body;
    const token = jwttoken({
      first_Name: first_Name,
      last_Name: last_Name,
      user_email: user_email,
    });

    const isuserexist = await user.findOne({ user_email: user_email });
    if (isuserexist) {
      return res.json({ error: "this email is already exists" });
    }
    const newaccount = new user({
      first_Name: first_Name,
      last_Name: last_Name,
      user_email: user_email,
      user_password: user_password,
      user_phoneNumber: user_phoneNumber,
      user_token: token,
    });
    const newuser = await newaccount.save();
    res.json({ message: "Signup successfully", token: token });
  } catch (error) {
    console.error("error in signup", error);
    res.json({ message: "error in signup" });
  }
};

const login = async (req, res) => {
  try {
    const { user_email, user_password } = req.body;
    const userInfo = await user.findOne({ user_email: user_email });
    console.log(userInfo);
    if (!userInfo) {
      return res.json({ error: "email not found" });
    }
    if (userInfo.isDeleted) return res.json({ error: "this user not active" });
    const checkPass = await bcrypt.compare(
      user_password,
      userInfo.user_password
    );
    if (!checkPass) {
      return res.json({ error: "Invalid password" });
    }
    const token = jwttoken({
      user_email: user_email,
    });
    res.json({ message: "Success Login user", token: token });
  } catch (error) {
    console.error("failed in login", error);
  }
};

// const login = async (req, res) => {

//     try {
//         // check if the user exists
//         const { user_email, user_password } = req.body
//         const isuser = await user.findOne({ user_email: user_email })
//         if (!isuser) {
//             return res.json({ error: "email is not found" })
//         }
//         // check if the password is correct
//         const checkpassword = await bcrypt.compare(user_password, isuser.user_password)
//         if (!checkpassword) {
//             return res.json({ error: "incorrect password" })
//         }

//         res.json(isuser.user_token)
//         console.log(isuser.user_token);
//     } catch (error) {
//         console.error(error);
//     }
// }

const getUser = async (req, res) => {
  try {
    if (!req?.user)
      return res.status(400).json({ message: "User is UnAuthorized" });
    const users = await user
      .findOne({ user_email: req.user.user_email })
      .exec();

    if (!users) {
      return res
        .status(204)
        .json({ message: `User Email ${req.user.user_email} not found` });
    }
    res.json(users);
  } catch (error) {
    console.error("failed in login", error);
  }
};

const getImage = async (req, res) => {
  try {
    const User = await user.findOne({ user_email: req.user.user_email });
    const image = `http://localhost:3000/${User.imageUrl}`;
    res.json(image);
  } catch (error) {
    console.error(error, "error in get the user image");
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { fname, lname, phoneNumber } = req.body;
    const imagePath = req.file.path;
    const users = await user.findById(id);

    if (!users) {
      console.log("User not found");
      return;
    }

    users.first_Name = fname || users.first_Name;
    users.last_Name = lname || users.last_Name;
    users.user_phoneNumber = phoneNumber || users.user_phoneNumber;
    users.imageUrl = imagePath || users.imageUrl;

    const updatedUser = await users.save();
    res.json(updatedUser);
  } catch (error) {
    console.error("Error editing user:", error);
  }
};

const addToWishList = async (req, res) => {
  const { perfumeId } = req.body;
  const { id } = req.params;
  try {
    // Find the user by ID and update the wishlist
    const users = await user.findByIdAndUpdate(
      id,
      { $addToSet: { wishList: { perfumeId } } },
      { new: true }
    );

    res.json({
      success: true,
      users,
      message: "perfume added to wish list successfully",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, error: "error in add the perfume to wish list" });
  }
};

const getWishList = async (req, res) => {
  const { id } = req.params;
  console.log("this is the user id", id);
  try {
    const User = await user.findById(id).populate("wishList");
    console.log("this is the user", User);
    res.json({ success: true, wishList: User.wishList });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, error: "error in get the users wish list" });
  }
};
module.exports = {
  allusers,
  adduser,
  login,
  getUser,
  getImage,
  updateUser,
  addToWishList,
  getWishList,
};
