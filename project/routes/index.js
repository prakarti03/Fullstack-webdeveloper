const express = require('express');
const router = express.Router();

let posts = [];

router.get('/', (req, res) => {
  res.render('home', { posts });
});

router.get('/new-post', (req, res) => {
  res.render('new-post');
});

router.post('/new-post', (req, res) => {
  const newPost = {
    id: Date.now().toString(),
    title: req.body.title,
    content: req.body.content
  };
  posts.push(newPost);
  res.redirect('/');
});

router.get('/edit-post/:id', (req, res) => {
  const post = posts.find(p => p.id === req.params.id);
  res.render('edit-post', { post });
});

router.post('/edit-post/:id', (req, res) => {
  const postIndex = posts.findIndex(p => p.id === req.params.id);
  posts[postIndex].title = req.body.title;
  posts[postIndex].content = req.body.content;
  res.redirect('/');
});

router.post('/delete-post/:id', (req, res) => {
  posts = posts.filter(p => p.id !== req.params.id);
  res.redirect('/');
});

module.exports = router;
