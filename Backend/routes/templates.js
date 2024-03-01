// routes/templates.js
const express = require("express");
const Templates = require("../models/Templates");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // Retrieve all documents from the "Template" collection
    const templates = await Templates.find();
    res.json(templates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
