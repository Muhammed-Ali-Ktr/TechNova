const express = require("express");
const router = express.Router();
const News = require("../models/News");

// Haber ekle
router.post("/", async (req, res) => {
  try {
    const news = new News(req.body);
    await news.save();
    res.json(news);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Haberleri getir
router.get("/", async (req, res) => {
  try {
    const newsList = await News.find().sort({ date: -1 });
    res.json(newsList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

