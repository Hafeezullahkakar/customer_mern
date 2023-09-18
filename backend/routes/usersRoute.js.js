const { Router } = require("express");

const {
  getAllUsers,
  getOneUser,
  createUser,
  deleteUser,
  upDateUser,
} = require("../controllers/usersController.js");

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getOneUser);

router.post("/add", createUser);

router.put("/update/:id", upDateUser);
router.delete("/delete/:id", deleteUser);


module.exports = router;
