require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/users");
const courseRoute = require("./routes/courses");

//express app

const app = express();

//middleware
app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Users route
app.use("/api/users", userRoute);

//Step 5 in the courses route, register all routes
app.use("/api/courses", courseRoute);

//Listen Port
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log("Listening on port: ", process.env.PORT);
    });
  })
  .catch(error => {
    console.log(error);
  });
