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

module.exports = {
  sendCommandToMachine,
};
