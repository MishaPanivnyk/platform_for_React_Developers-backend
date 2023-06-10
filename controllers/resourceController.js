const Resource = require("../models/Resource");

async function createResource(req, res) {
  const { title, category, description, codeSamples } = req.body;

  try {
    const resource = await Resource.create({
      title,
      category,
      description,
      codeSamples,
    });
    res.status(201).json(resource);
  } catch (error) {
    res.status(500).json({ error: "Failed to create resource" });
  }
}

async function getResources(req, res) {
  try {
    const resources = await Resource.find();
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ error: "Failed to get resources" });
  }
}

// Додаткові методи контролера для оновлення, видалення тощо...

module.exports = {
  createResource,
  getResources,
  // Додаткові експортовані методи контролера
};
