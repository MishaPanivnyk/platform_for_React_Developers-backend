const express = require("express");
const router = express.Router();
const projectController = require("../../controllers/projectController");

router.get("/", projectController.getAllProjects);
router.post("/", projectController.createProject);
router.get("/:id", projectController.getProjectById);
router.put("/:id", projectController.updateProject);
router.delete("/:id", projectController.deleteProject);

// Добавити в колоборатори
// router.post("/:id/request", projectController.sendCollaborationRequest);

// Приєднатись до проекту
// router.post("/:id/join", projectController.joinProject);

// Відправити повідомлення
// router.post("/:id/messages", projectController.sendMessage);

module.exports = router;
