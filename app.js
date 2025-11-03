const express = require("express");
const getPublicPage = require("./lib/getPublicPage");
const home = require("./pages/home");
const commandRouter = require("./routers/commandRouter");
const path = require("path");

const app = express();
app.use(express.json());
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/command", commandRouter);

app.get("/", async (req, res) => {
  await getPublicPage(req, res, home);
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
