const express = require("express");
const { Post } = require("../../db/models");
const verifyAccessToken = require("../middlewares/verifyAccessToken");
const checkAuthor = require("../middlewares/checkAuthor");

const postsRouter = express.Router();

postsRouter.get("/", verifyAccessToken, async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
});

postsRouter.post("/", verifyAccessToken, async (req, res) => {
  const data = req.body;
  const post = await Post.create({
    ...data,
    userId: res.locals.user.id,
  });
  res.json(post);
});

module.exports = postsRouter;
