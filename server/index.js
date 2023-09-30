const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const { router } = require("./routes/authRoutes");


const app = express()
const port = process.env.PORT || 5000;
app.use(cors({ origin: "http://localhost:3000" }))
app.use(express.json());

// Define your API routes or other server logic here
app.use("/api", router)

// Connect to MongoDB
mongoose
  .connect(
    "put your connection string here",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(port, () => {
      console.log(
        `Server is running on port ${port} and successfully connected to database.`
      );
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
