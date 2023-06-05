const News = require("../models/News");

// Обробник для отримання стрічки новин
const getNews = async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Обробник для отримання детальної інформації про новину
const getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Обробник для створення коментаря до новини
const createComment = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      res.status(404).json({ error: "Новина не знайдена" });
    } else {
      news.comments.push(req.body);
      await news.save();
      res.status(201).json({ message: "Коментар збережено" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Помилка сервера" });
  }
};

// Обробник для отримання коментарів до новини
const getComments = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      res.status(404).json({ error: "Новина не знайдена" });
    } else {
      res.json(news.comments);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Помилка сервера" });
  }
};

module.exports = {
  getNews,
  getNewsById,
  createComment,
  getComments,
};
