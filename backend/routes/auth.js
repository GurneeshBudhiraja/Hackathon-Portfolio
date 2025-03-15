const express = require("express");
const router = express.Router();
const db = require("../database");

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  
  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ message: "Server error" });

    if (results.length > 0) {
      
      res.json({ message: "Login successful", token: "12345" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  });
});

module.exports = router;
