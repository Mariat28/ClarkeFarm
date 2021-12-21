const express = require('express');

const router = express.Router();
const Trainee = require('../Models/TraineeModel');

router.get('/', async (req, res) => {
  try {
    const trainees = await Trainee.find({});
    res.json(trainees);
  } catch (error) {
    res.status(400).send('Unable to find trainees');
  }
});

router.post('/', async (req, res) => {
  try {
    const newTrainee = new Trainee(req.body);
    await newTrainee.save()
      .then(() => res.json('Visitor Added'));
  } catch (error) {
    console.error(error);
    res.json('Unsuccessful! Please Try Again');
  }
});
router.delete('/delete/:id', async (req, res) => {
  try {
    await Trainee.findByIdAndDelete(req.params.id).exec((err, deleted) => {
      res.send(deleted);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
