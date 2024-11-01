require("dotenv").config();
const express = require("express");
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
const app = express();

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// routers
const messageRouter = require("./routes/message.routes");
const registerRouter = require("./routes/register.routes");

app.use("/", registerRouter);
app.use("/message", messageRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Listening in port ${PORT} . . .`);
});
