const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//CRUD *** create(POST) receive(GET) update(PUT) delete(DELETE) aka "pogepude"...it's silly to put this but this helps me to remember...

//api route to find all in categories
router.get('/', (req, res) => {
  Category.findAll()
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    res.status(500).json(err)
  });
});

//api route to find one category by its `id` value
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    //if no category is found by "id" input search then send error message
  }).then(dbCategoryData => {
    if(!dbCategoryData) {
      res.status(400).json({ message: 'No category found with that id!'});
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

//api route to create a new category
router.post('/', (req, res) => {
  Category.create({

  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(400).json(err);
  });
});

//api route to update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.body.id
    }
  })
  .then(dbCategoryData => {
    if(!dbCategoryData) {
      res.status(404).json({ message: 'No category was found with this id'});
      return;
    }
    res.json(dbCategoryData)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

//api route to delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoryData => {
    if(!dbCategoryData) {
      res.status(404).json({ message: 'No category was found with this id'});
      return;
    }
    res.json(dbCategoryData)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

module.exports = router;
