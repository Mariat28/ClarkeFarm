const express = require('express');

const router = express.Router();
const Order = require('../Models/coffeeOrderModel');

router.get('/', async (req, res) => {
  try {
    const orders = await Order.find({});
    res.send(orders);
  } catch (error) {
    console.log(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const order = await Order(req.body);
    order.save();
    res.end();
  } catch (error) {
    console.log(error);
  }
});
router.delete('/delete/:id', async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id).exec((err, deleted) => {
      res.send(deleted);
    });
  } catch (error) {
    console.log(error);
  }
});
router.put('/update/:id/:value', async (req, res) => {
  const delivered = {
    $set: {
      delivered: true,
    },
  };
  const notdelivered = {
    $set: {
      delivered: false,
    },
  };
  try {
    if (req.params.value === 'true') {
      // await Order.findByIdAndUpdate(req.params.id, notdelivered, () => {
      //   res.send(`item updated${req.params.value}`);
      // });
      await Order.findByIdAndUpdate(req.params.id, notdelivered).exec((err, updated) => {
        res.send(updated);
      });
    } else {
      // await Order.findByIdAndUpdate(req.params.id, delivered, () => {
      //   res.send(`item updated${req.params.value}`);
      await Order.findByIdAndUpdate(req.params.id, delivered).exec((err, updated) => {
        res.send(updated);
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
