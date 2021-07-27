const router = require('express').Router();
let Item = require('../models/items.model');

router.route('/').get((req, res) => {
    Item.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    console.log(req)
  const name = req.body.name;
  const price = Number(req.body.price);
  const type = req.body.type;
  const imagename = req.body.imagename;

  const newItem = new Item({
    name,
    imagename,
    price,
    type,
  });

  newItem.save()
  .then(() => res.json('Item added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
router.delete('/:itemId', async (req, res) => {
  try {
      const removedItem = await Item.remove({ _id: req.params.itemId })
      res.json(removedItem)
  }
  catch (err) {
      res.json({ message: err })
  }
})

/*router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});*/

/*router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});*/

module.exports = router;