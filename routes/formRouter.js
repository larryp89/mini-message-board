// Imports the Router function from the Express module (via destructuring)
const { Router } = require("express");

// Create an instance of the Express router
const formRouter = Router();

formRouter.get("/", (req, res) => {
  res.render("messageForm");
});

module.exports = formRouter;
