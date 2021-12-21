const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const uploads = require('../shared/multer')();
const Activity = require('../Models/activityModel');

router.get('/', async (req, res) => {
  try {
    const activities = await Activity.find({});
    res.send(activities);
  } catch (error) {
    console.log(error);
  }
});

router.post('/', uploads.single('file'), async (req, res) => {
  try {
    const { filename } = req.file;
    const data = { ...req.body, filename };
    const activity = await Activity(data);
    activity.save().then((saved) => res.send(saved));
  } catch (error) {
    console.log(error);
    res.status(400).send('Something went wrong with the upload');
  }
});

// Path to deleted image.
const dirPath = path.join(__dirname, '..', 'uploads');

router.delete('/delete/:id', async (req, res) => {
  try {
    await Activity.findByIdAndDelete(req.params.id).exec((err, deleted) => {
      const uploadedImg = path.join(dirPath, `/${deleted.filename}`);
      fs.unlinkSync(uploadedImg);
      res.send(deleted);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
