// controllers/postController.js
const Post = require("../models/Post");
const Comment = require("../models/Comment");

// Створення нового поста
function createPost(req, res) {
  const { title, content, author } = req.body;
  const post = new Post({ title, content, author });

  post
    .save()
    .then((savedPost) => {
      res.status(201).json(savedPost);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Помилка сервера" });
    });
}

// Отримання всіх постів
function getPosts(req, res) {
  Post.find()
    .populate("comments")
    .then((posts) => {
      res.json(posts);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Помилка сервера" });
    });
}

// Створення коментаря до поста
function createComment(req, res) {
  const { postId, content, author } = req.body;
  const comment = new Comment({ content, author, postId });

  comment
    .save()
    .then((savedComment) => {
      return Post.findByIdAndUpdate(postId, {
        $push: { comments: savedComment._id },
      });
    })
    .then(() => {
      res.status(201).json(comment);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Помилка сервера" });
    });
}

// Отримання коментарів до поста
function getComments(req, res) {
  const postId = req.params.postId;

  Comment.find({ postId })
    .then((comments) => {
      res.json(comments);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Помилка сервера" });
    });
}

module.exports = {
  createPost,
  getPosts,
  createComment,
  getComments,
};
