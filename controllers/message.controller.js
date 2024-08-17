const asyncHandler = require("express-async-handler");
const messageModel = require("../model/messages.model");

const getMessages = asyncHandler(async (req, res) => {
	res.send(messageModel.messages);
});

module.exports = { getMessages };
