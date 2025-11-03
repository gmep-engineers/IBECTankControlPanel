const config = require("../etc/config");
const ejs = require("ejs");
const common = {
  params: { config: config },
  db: {
    host: config.SQL_HOST,
    user: config.SQL_USER,
    database: config.SQL_DB,
    password: config.SQL_PASSW,
    timezone: "Z",
  },
  render: function (templateName, templateParams) {
    return new Promise((resolve, reject) => {
      ejs.renderFile(
        "./" + templateName + ".ejs",
        templateParams,
        function (err, str) {
          if (err) {
            console.error(err);
            reject(err);
          }
          resolve(str);
        }
      );
    });
  },
};
module.exports = common;
