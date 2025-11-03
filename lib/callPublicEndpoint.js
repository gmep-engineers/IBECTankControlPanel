const common = require("./common");
const mysql = require("mysql2/promise");
const callPublicEndpoint = async function (req, res, api, action) {
  const conn = await mysql.createConnection(common.db);
  try {
    await api[action](req, res, conn);
  } catch (e) {
    console.error(e);
  }
  conn.destroy();
};

module.exports = callPublicEndpoint;
