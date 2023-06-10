const express = require("express");
const router = express.Router();
const resourceController = require("../../controllers/resourceController");

// Маршрутизація для створення ресурсу
router.post("/", resourceController.createResource);

// Маршрутизація для отримання ресурсів
router.get("/", resourceController.getResources);

// Інші маршрути для оновлення, видалення тощо...

module.exports = router;
