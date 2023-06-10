const express = require("express");
const router = express.Router();
const commentController = require("../../controllers/commentController");

// Маршрутизація для створення коментаря
router.post("/", commentController.createComment);

// Маршрутизація для отримання коментарів по ресурсу
router.get("/:resourceId", commentController.getCommentsByResource);

// Інші маршрути для оновлення, видалення тощо...

module.exports = router;
