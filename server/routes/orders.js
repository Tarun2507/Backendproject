const router = require('express').Router();
let order = require('../models/orders.model');

router.route('/').get((req, res) => {
    order.find()
    .then(orders => res.json(orders))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    console.log(req)
  const noofitems = Number(req.body.noofitems);
  const customername = req.body.customername;
  const bill = Number(req.body.bill);
  const status = req.body.status;

  const newOrder = new order({
    noofitems,
    customername,
    bill,
    status,
  });

  newOrder.save()
  .then(() => res.json('Item added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
router.delete('/:itemId', async (req, res) => {
  try {
      const removedItem = await order.remove({ _id: req.params.itemId })
      res.json(removedItem)
  }
  catch (err) {
      res.json({ message: err })
  }
})
module.exports = router;