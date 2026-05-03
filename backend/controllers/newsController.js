const News = require("../models/News");

exports.createNews = async (req, res) => {
  try {
    const news = await News.create({
      ...req.body,
      author: req.user
    });
    res.json(news);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.getAllNews = async (req, res) => {
  const news = await News.find().populate("author", "name");
  res.json(news);
};

exports.getSingleNews = async (req, res) => {
  const news = await News.findById(req.params.id);
  res.json(news);
};

exports.updateNews = async (req, res) => {
  const news = await News.findById(req.params.id);

  if (news.author.toString() !== req.user)
    return res.status(403).json({ msg: "Unauthorized" });

  const updated = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteNews = async (req, res) => {
  const news = await News.findById(req.params.id);

  if (news.author.toString() !== req.user)
    return res.status(403).json({ msg: "Unauthorized" });

  await news.deleteOne();
  res.json({ msg: "Deleted" });
};