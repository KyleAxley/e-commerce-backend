const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint
//CRUD *** create(POST) receive(GET) update(PUT) delete(DELETE) aka "pogepude"...it's silly to put this but this helps me to remember...

router.get("/", (req, res) => {
  // find all tags
  Tag.findAll({
    include: {
      model: Product,
      attributes: ["id", "product_name", "price", "stock"],
      through: ProductTag,
      as: "products",
    },
  })
    .then((dbTagData) => res.json(dbTagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// find a single tag by its `id`
router.get('/:id', (req, res) => {
  Tag.findOne({ 
    where: {
      id: req.params.id
    }, 
    include: [Product] 
  })
  .then(dbTagData => {
    if (!dbTagData) {
        res.status(404).json({ message: 'No tag found with that id' });
        return;
    }
    res.json(dbTagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: err });
  });
});

// create a new tag
router.post("/", (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name,
  })
    .then((dbTagData) => res.json(dbTagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//update a tag
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbTagData => {
      if (!dbTagData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbTagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete on tag by its `id` value
router.delete("/:id", (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbTagData) => {
      if (!dbTagData) {
        res.status(404).json({ message: "No tag was found by that id" });
        return;
      }
      res.json(dbTagData[0]);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
