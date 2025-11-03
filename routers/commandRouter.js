const express = require("express");
const router = express.Router();
const commandApi = require("../api/commandApi");
const callPublicEndpoint = require("../lib/callPublicEndpoint");

router.post("/", async function (req, res) {
  await callPublicEndpoint(req, res, commandApi, "post");
});
module.exports = router;
