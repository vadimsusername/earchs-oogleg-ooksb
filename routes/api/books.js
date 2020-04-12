const router = require("express").Router();
const db = require("../../models");

// Matches with "/api/books"
router.route("/")
  .get(function(req, res) {
    db.Book
    .find(/* req.query */)
    .then(dbBook => {
        console.log(dbBook);
        res.json(dbBook);
    })
    .catch(err => res.status(422).json(err));
  })
  .post(function(req,res) {
    console.log("in Post save");
    console.log(req.body);
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  });

/*   .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

 */

module.exports = router;