const router = require("express").Router();
var  api_books = require("./books");

// Book routes
router.use("/books", api_books);

module.exports = router;
