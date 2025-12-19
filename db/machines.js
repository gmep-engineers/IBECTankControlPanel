const sendCommandToMachine = async function (
  conn,
  machines$id,
  machines$command_id
) {
  const query = `
    update machines set command_id = ? where id = ?
    `;
  const [result] = await conn.query(query, [machines$command_id, machines$id]);
  return result.affectedRows > 0;
};

const setMachineStatusId = async function (
  conn,
  machines$id,
  machines$statusId
) {
  const query = `
  update machines set status_id = ? where id = ?
  `;
  await conn.query(query, [machines$statusId, machines$id]);
};

module.exports = {
  sendCommandToMachine,
  setMachineStatusId,
};
