const publicPage = require("../templates/publicPage");

const getPublicPage = async function (req, res, main) {
  var mainHtml;
  try {
    mainHtml = await main(req);
  } catch (e) {
    console.error(e);
  }
  if (!mainHtml) {
    res.redirect(302, "/");
    return;
  }
  var fullHtml;
  try {
    fullHtml = await publicPage(mainHtml);
  } catch (e) {
    console.error(e);
  }
  res.status(200).end(fullHtml);
};

module.exports = getPublicPage;
