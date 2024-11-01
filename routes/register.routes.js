const { Router } = require("express");
const registerController = require("../controllers/register.controller");
const router = Router();

router.get("/", registerController.registerUser);
router.post("/register", registerController.createUser);

module.exports = router;
