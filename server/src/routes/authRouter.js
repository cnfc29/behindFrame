const express = require('express');
const bcrypt = require('bcrypt');
const generateTokens = require('../utils/generateTokens');
const cookieConfig = require('../configs/cookieConfig');
const { User } = require('../../db/models');

const authRouter = express.Router();

authRouter.post('/signup', async (req, res) => {
  const { name, login, password } = req.body;
  if (!name || !login || !password) return res.sendStatus(400);

  const hashpassword = await bcrypt.hash(password, 10);

  const [newUser, created] = await User.findOrCreate({
    where: { login },
    defaults: { name, password: hashpassword },
  });
  if (!created) return res.sendStatus(400);

  const user = newUser.get();
  delete user.password;
  const { accessToken, refreshToken } = generateTokens({ user });
  res
    .cookie('refreshToken', refreshToken, cookieConfig)
    .json({ accessToken, user });
});

authRouter.post('/login', async (req, res) => {
  const { login, password } = req.body;
  if (!login || !password) return res.sendStatus(400);

  const findUser = await User.findOne({ where: { login } });
  if (!findUser) return res.sendStatus(400);

  const isValid = await bcrypt.compare(password, findUser.password);
  if (!isValid) return res.sendStatus(400);

  const user = findUser.get();
  delete user.password;
  const { accessToken, refreshToken } = generateTokens({ user });
  res
    .cookie('refreshToken', refreshToken, cookieConfig)
    .json({ accessToken, user });
});

authRouter.post('/logout', async (req, res) => {
  res.clearCookie('refreshToken').sendStatus(200);
});

module.exports = authRouter;
