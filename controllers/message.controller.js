const store = require("store2");
const asyncHandler = require("express-async-handler");
const messageModel = require("../model/messages.model");

const getMessages = asyncHandler(async (req, res) => {
	if (!store("user")) return res.redirect("/");

	res.render("index", {
		title: "Mini-message-board",
		messages: messageModel.messages,
	});
});

const createMessage = asyncHandler(async (req, res) => {
	messageModel.messages.push({
		text: req.body.message,
		user: store("user") || "User",
		added: new Date().toLocaleString(),
	});
	res.redirect("back");
});

module.exports = { getMessages, createMessage };
