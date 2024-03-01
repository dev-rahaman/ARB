const express = require("express");
const mongoose = require("mongoose");
const awesomeResumeRoutes = require("./routes/awesomeResumeRoutes");
const templates = require("./routes/templates");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://awesome-resume-builder:sVMn5OlVm2gCvriR@cluster0.6n430jr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 ",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/awesome/resumes", awesomeResumeRoutes);
app.use("/template", templates);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
