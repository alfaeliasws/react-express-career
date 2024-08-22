const express = require("express");
const cors = require("cors");
const port = 4500;
const config = require("./config");
const helper = require("./helper");
const baseURL = config.util.base;
const authRouter = require("./routes/Auth");
const tokenRouter = require("./routes/Tokens");
const careersRouter = require("./routes/Careers");
const usersRouter = require("./routes/Users");
const coursesRouter = require("./routes/Courses");
const educationsRouter = require("./routes/Educations");
const jwt = require("jsonwebtoken");

startExpress();

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.TOKEN_SECRET, function (err, decoded) {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.sendStatus(403);
      }
      next();
    } else {
      next();
    }
    // next();
  });
}

function startExpress() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(baseURL + "/auth", authRouter);
  app.use(baseURL + "/token", tokenRouter);
  app.get(baseURL + "", [authenticateToken], (req, res) => {
    res.json({ message: "ok" });
  });
  app.use(baseURL + "/users", [authenticateToken], usersRouter);
  app.use(baseURL + "/careers", [authenticateToken], careersRouter);
  app.use(baseURL + "/educations", [authenticateToken], educationsRouter);
  app.use(baseURL + "/courses", [authenticateToken], coursesRouter);
  

  /* Error handler middleware */
  app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
  });
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}
