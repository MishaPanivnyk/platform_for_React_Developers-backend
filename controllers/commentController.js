const CommentResource = require("../models/CommentResource");

async function createComment(req, res) {
  const { content, author, resourceId } = req.body;

  try {
    const comment = await CommentResource.create({
      content,
      author,
      resourceId,
    });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: "Failed to create comment" });
  }
}

async function getCommentsByResource(req, res) {
  const { resourceId } = req.params;

  try {
    const comments = await CommentResource.find({ resourceId });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: "Failed to get comments" });
  }
}

// Додаткові методи контролера для оновлення, видалення тощо...

module.exports = {
  createComment,
  getCommentsByResource,
  // Додаткові експортовані методи контролера
};
