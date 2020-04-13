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
      .then(dbBook => res.json(dbBook))
      .catch(err => console.log(err));
  });

    router
    .route("/:id")
    .delete(function(req,res) {
        db.Book.deleteOne({_id: req.params.id})
        .then(dbBook => res.json(dbBook))
        .catch(err => console.log(err));
    });



module.exports = router;