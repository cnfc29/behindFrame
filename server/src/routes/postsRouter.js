const express = require('express');
const { Post } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const postsRouter = express.Router();

postsRouter.post('/', verifyAccessToken, async (req, res) => {
  try {
    const { image, description } = req.body;

    if (!image || !description) {
      return res.status(400).json({ message: 'Image and description are required.' });
    }

    const newPost = await Post.create({
      image,
      description,
      userId: res.locals.user.id,
    });

    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error creating post:', error.message);
    res.status(500).json({ message: 'Failed to create post.' });
  }
});

postsRouter.get('/my', verifyAccessToken, async (req, res) => {
  const posts = await Post.findAll({ where: { userId: res.locals.user.id } });
  res.json(posts);
});

module.exports = postsRouter;
