const store = require("store2");

const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
	res.render("register");
});

const createUser = asyncHandler(async (req, res) => {
	if (req.body.user.trim() === "") return res.render("usernameError");

	store.clear();
	store("user", req.body.user);
	res.redirect("/message");
});

module.exports = { registerUser, createUser };
