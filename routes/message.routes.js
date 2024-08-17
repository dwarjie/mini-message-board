const { Router } = require("express");
const messageController = require("../controllers/message.controller");
const router = Router();

router.get("/", messageController.getMessages);

module.exports = router;
