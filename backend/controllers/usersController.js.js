// const userModel = require("../models/userModel.js");
const UsersModel = require("../models/userModel.js");

module.exports.getAllUsers = async (req, res) => {
  try {
    const users = await UsersModel.find();
    res.status(200).json({ users: users, error: null });
  } catch (error) {
    res.status(500).json({ users: null, error: error.message });
  }

  // return res.status(500).json({ data: null, error: error });
};
module.exports.getOneUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await UsersModel.findById(userId);

    if (!user) {
      return res.status(404).json({ users: null, error: "no user found" });
    }

    res.status(200).json({ user: user, error: null });
  } catch (error) {
    res.status(500).json({ user: null, error: error.message });
  }
};

module.exports.createUser = (req, res) => {
  const { name, email, phone, creationTime } = req.body;

  UsersModel.create({ name, email, phone, creationTime })
    .then((data) => {
      console.log("user created Successfully...");
      console.log(data);
      res.status(201).json({ data: data, error: null });
    })
    .catch((error) => {
      return res.status(500).json({ data: null, error: error });
    });
};

module.exports.deleteUser = (req, res) => {
  const { id } = req.params; // Use req.params to get the ID from the URL parameters
  UsersModel.findByIdAndDelete(id)
    .then(() => res.status(201).send("Deleted Successfully...")) // Use res.status to set the response status
    .catch((err) => console.log(err));
};

module.exports.update = async (req, res) => {
  const user = UsersModel.findById(id);
  res.status(200).json({ user: user, message: "found" });
  console.log("body: ", red.body);
};

module.exports.upDateUser = async (req, res) => {
  console.log("user to be updated: ");
  
  const { id } = req.params;
  const { name, email, phone } = req.body;

  UsersModel.findByIdAndUpdate(id, { name, email, phone }, { new: true })
    .then((updatedUser) => {
      if (!updatedUser) {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }
      res.status(200).json({
        success: true,
        message: "Updated successfully",
        user: updatedUser,
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    });
};
