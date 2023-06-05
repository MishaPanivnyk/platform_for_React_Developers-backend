const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/api/authRoutes");
const profileRoutes = require("./routes/api/profileRoutes");

const app = express();
require("dotenv").config();
// Підключення
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
