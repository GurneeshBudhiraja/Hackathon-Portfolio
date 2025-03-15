const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const searchRoutes = require("./routes/search");

const app = express();
app.use(express.json());

// ❌ CORS Misconfiguration: Allowing all origins
app.use(cors({ origin: "*" }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/search", searchRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
