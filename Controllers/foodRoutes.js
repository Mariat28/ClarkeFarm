const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();
const uploads = require('../shared/multer')();
const Food = require('../Models/foodModel');

router.get('/', async (req, res) => {
  try {
    const foods = await Food.find({});
    res.send(foods);
  } catch (error) {
    console.log(error);
  }
});

router.post('/', uploads.single('file'), async (req, res) => {
  try {
    const { filename } = req.file;
    const data = { ...req.body, filename };
    const food = await Food(data);
    food.save().then((saved) => res.send(saved));
  } catch (error) {
    console.log(error);
    res.status(400).send('Something went wrong with the upload');
  }
});

// Path to deleted image.
const dirPath = path.join(__dirname, '..', 'uploads');

router.delete('/delete/:id', async (req, res) => {
  try {
    await Food.findByIdAndDelete(req.params.id).exec((err, deleted) => {
      const uploadedImg = path.join(dirPath, `/${deleted.filename}`);
      fs.unlinkSync(uploadedImg);
      res.send(deleted);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
