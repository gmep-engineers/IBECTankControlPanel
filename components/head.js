const common = require("../lib/common");
const head = async function () {
  const params = common.params;
  return await common.render("components/head", params);
};
module.exports = head;
