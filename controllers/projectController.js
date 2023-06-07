const Project = require("../models/Project");

async function getAllProjects(req, res) {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createProject(req, res) {
  const { title, description, functionality, codeSamples, documentation } =
    req.body;

  try {
    const project = new Project({
      title,
      description,
      functionality,
      codeSamples,
      documentation,
    });

    const savedProject = await project.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getProjectById(req, res) {
  const { id } = req.params;

  try {
    const project = await Project.findById(id);
    res.json(project);
  } catch (error) {
    res.status(404).json({ message: "Project not found" });
  }
}

async function updateProject(req, res) {
  const { id } = req.params;
  const { title, description, functionality, codeSamples, documentation } =
    req.body;

  try {
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      { title, description, functionality, codeSamples, documentation },
      { new: true }
    );
    res.json(updatedProject);
  } catch (error) {
    res.status(404).json({ message: "Project not found" });
  }
}

async function deleteProject(req, res) {
  const { id } = req.params;

  try {
    await Project.findByIdAndDelete(id);
    res.json({ message: "Project deleted" });
  } catch (error) {
    res.status(404).json({ message: "Project not found" });
  }
}

// async function sendCollaborationRequest(req, res) {
//   const { id } = req.params;
//   const { userId, message } = req.body;

//   try {
//     // Напишите код для отправки запроса на сотрудничество по проекту с идентификатором `id` от пользователя с идентификатором `userId` и сообщением `message`
//     // ...
//     res.json({ message: "Collaboration request sent" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// }

// async function joinProject(req, res) {
//   const { id } = req.params;
//   const { userId } = req.body;

//   try {
//     // Напишите код для присоединения пользователя с идентификатором `userId` к проекту с идентификатором `id`
//     // ...
//     res.json({ message: "Joined project" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// }

// async function sendMessage(req, res) {
//   const { id } = req.params;
//   const { userId, message } = req.body;

//   try {
//     // Напишите код для отправки сообщения от пользователя с идентификатором `userId` в проект с идентификатором `id`
//     // ...
//     res.json({ message: "Message sent" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// }

module.exports = {
  getAllProjects,
  createProject,
  getProjectById,
  updateProject,
  deleteProject,
  //   sendCollaborationRequest,
  //   joinProject,
  //   sendMessage,
};
