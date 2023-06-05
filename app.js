const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/api/authRoutes");
const profileRoutes = require("./routes/api/profileRoutes");
const newsRoutes = require("./routes/api/newsRoutes");
const postRoutes = require("./routes/api/postRoutes");
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

app.use("/news", newsRoutes);

app.use("/posts", postRoutes);
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
