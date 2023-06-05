const express = require("express");
const router = express.Router();
const newsController = require("../../controllers/newsController");

// Маршрут для отримання стрічки новин
router.get("/", newsController.getNews);

// Маршрут для отримання детальної інформації про новину
router.get("/:id", newsController.getNewsById);

// Маршрут для створення коментаря до новини
router.post("/:id/comments", newsController.createComment);

// Маршрут для отримання коментарів до новини
router.get("/:id/comments", newsController.getComments);

module.exports = router;
