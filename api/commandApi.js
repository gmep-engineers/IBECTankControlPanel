const { sendCommandToMachine } = require("../db/machines");

const command = {
  post: async function (req, res, conn) {
    const machines$id = req.body.machines$id;
    const machines$command_id = req.body.machines$command_id;
    const updated = await sendCommandToMachine(
      conn,
      machines$id,
      machines$command_id
    );
    if (updated) {
      res.status(201).send({});
    } else {
      res.status(400).send({ error: `machine ${machines$id} not found` });
    }
  },
};
module.exports = command;
