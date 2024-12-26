const { Post } = require("../../db/models");

async function checkAuthor(req, res, next) {
  const { id } = req.params;
  const userId = res.locals.user.id;
  const targetPost = await Post.findByPk(id);
  if (targetPost && targetPost?.userId === userId) return next();
  return res.sendStatus(403);
}

module.exports = checkAuthor;
