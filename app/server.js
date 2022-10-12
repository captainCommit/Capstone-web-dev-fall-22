const express = require("express");
const logger = require("./utils/logger");
const passport = require('passport');
const { connectToDB } = require("./utils/dbHandler");
const { authHandler } = require("./routes/authHandler");
const { secureRouter } = require("./routes/secureRoutes")
const { router } = require("./routes/routes");
require("dotenv").config();
//logger.info(process.env.PORT, process.env.DB_URL, process.env.BUILD_PATH)
const app = express();
const PORT = process.env.PORT ? process.env.PORT : 3000;
const DB_URL = "mongodb+srv://root:xFNqHuDfLCRbbpKy@cluster.nfwhf.mongodb.net/capstonedb?retryWrites=true&w=majority"; //process.env.DB_URL
app.use(express.urlencoded({
  extended : false
}))
app.use(express.json())
app.use(express.static("./frontend/public"));

//auth handler handling all authentication requests
app.use("/auth", authHandler);

//insecure router handling all insecure requests
app.use("/other", router);
app.use('/api', passport.authenticate('jwt', { session: false }), secureRouter);
//testing endpoint
app.get("/check", (req, res) => {
  try {
    logger.info("test-endpoint works");
    res.send({
      status: "works",
      data: ["Suparno", "Mohammed", "Meet", "Rupesh", "Vasu"],
    });
  } catch (err) {
    logger.error(err.message);
  }
});

app.listen(PORT, async (req, res) => {
  await connectToDB(DB_URL);
  logger.info(`Server is running at ${PORT}`);
});

//testing new commit
