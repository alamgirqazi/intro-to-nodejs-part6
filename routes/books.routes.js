const express = require("express");
const router = express.Router();

const bookController = require('../controllers/books.controllers');

router.get("/",bookController.getAll);
router.post("/add",bookController.addBook);
// router.get("0/:_id",bookController.getSingleBook);
router.put("/:_id", bookController.updateBook);
router.delete("/:_id", bookController.deleteBook);


module.exports = router;