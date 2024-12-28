const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');
const authRouter = require('./routes/authRouter');
const tokensRouter = require('./routes/tokensRouter');
const postsRouter = require('./routes/postsRouter');

const app = express();

app.use(cors({ credentials: true, origin: true }));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.use('/api/tokens', tokensRouter);
app.use('/api/auth', authRouter);
app.use('/api/posts', postsRouter);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

module.exports = app;
