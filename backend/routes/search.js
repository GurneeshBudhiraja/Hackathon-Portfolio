const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/", (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ message: "Search query required" });
  }

  // ❌ XSS Vulnerability: Sending user input back in response without escaping
  res.send(`<h1>Search Results for: ${query}</h1>`);
});

module.exports = router;
