const express = require('express');

const router = express.Router();
const Visitor = require('../Models/visitorModel');

router.get('/', async (req, res) => {
  try {
    const visitors = await Visitor.find({});
    res.json(visitors);
  } catch (error) {
    res.status(400).send('Unable to find records');
  }
});

router.post('/', async (req, res) => {
  try {
    const newVisitor = new Visitor(req.body);
    await newVisitor.save()
      .then(() => res.json('Visitor Added'));
  } catch (error) {
    console.error(error);
    res.json('Unsuccessful! Please Try Again');
  }
});
router.delete('/delete/:id', async (req, res) => {
  try {
    await Visitor.findByIdAndDelete(req.params.id).exec((err, deleted) => {
      res.send(deleted);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
