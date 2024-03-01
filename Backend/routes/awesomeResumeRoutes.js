const express = require("express");
const AwesomeResume = require("../Models/AwesomeResume");
const router = express.Router();

// Create a new resume
router.post("/", async (req, res) => {
  try {
    const newResume = await AwesomeResume.create(req.body);
    res.status(201).json(newResume);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
