const router = require("express").Router();
const auth = require("../middleware/authMiddleware");

const {
  createNews,
  getAllNews,
  getSingleNews,
  updateNews,
  deleteNews
} = require("../controllers/newsController");

router.get("/", getAllNews);
router.get("/:id", getSingleNews);

router.post("/", auth, createNews);
router.put("/:id", auth, updateNews);
router.delete("/:id", auth, deleteNews);

module.exports = router;