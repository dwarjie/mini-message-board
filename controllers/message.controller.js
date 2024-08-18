const asyncHandler = require("express-async-handler");
const messageModel = require("../model/messages.model");

const getMessages = asyncHandler(async (req, res) => {
	res.render("index", {
		title: "Mini-message-board",
		messages: messageModel.messages,
	});
});

const createMessage = asyncHandler(async (req, res) => {
	messageModel.messages.push({
		text: req.body.message,
		user: req.body.user,
		added: new Date(),
	});
	res.redirect("back");
});

module.exports = { getMessages, createMessage };
