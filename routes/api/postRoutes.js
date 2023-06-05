const express = require("express");
const router = express.Router();
const postController = require("../../controllers/postController");

// Створення нового поста
router.post("/", postController.createPost);

// Отримання всіх постів
router.get("/", postController.getPosts);

// Створення коментаря до поста
router.post("/:postId/comments", postController.createComment);

// Отримання коментарів до поста
router.get("/:postId/comments", postController.getComments);

module.exports = router;
