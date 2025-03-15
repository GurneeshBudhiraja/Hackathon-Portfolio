const mysql = require("mysql");

// ❌ Hardcoded credentials (should be in env variables)
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password123", // ❌ Weak password
  database: "userDB",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to database.");
  }
});

module.exports = db;
