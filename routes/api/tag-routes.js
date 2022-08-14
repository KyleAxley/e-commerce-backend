const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint
//CRUD *** create(POST) receive(GET) update(PUT) delete(DELETE) aka "pogepude"...it's silly to put this but this helps me to remember...

router.get("/", (req, res) => {
  // find all tags
  Tag.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name', "price", "stock"],
      through: ProductTag,
      as: 'products'
    }
  })
    .then((dbTagData) => res.json(dbTagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: [Product],
    attributes: ['id', 'product_name', "price", "stock"],
    through: ProductTag,
    as: 'products'
  })
    .then((dbTagData) => {
      if (!dbTagData) {
        res.status(404).json({ message: "No tage was found with this id!" });
        return;
      }
      res.status(404);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create a new tag
router.post("/", (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then(dbTagData => res.json(dbTagData))
  .catch(err => {
    console.log(err)
    res.status(500).json(err);
  })
});

// update a tag's name by its `id` value
router.put("/:id", (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
    .then(dbTagData => {
      if(!dbTagData) {
        res.status(404).json({ message: 'No tag was found by that id!'})
        return;
      }
      res.json(dbTagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  });
});

// delete on tag by its `id` value
router.delete("/:id", (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbTagData => {
    if(!dbTagData) {
      res.status(404).json({ message: 'No tag was found by that id'})
      return;
    }
    res.json(dbTagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

module.exports = router;
