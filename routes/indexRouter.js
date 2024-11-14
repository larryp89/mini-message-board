const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

// Imports the Router function from the Express module (via destructuring)
const { Router } = require("express");

// Create an instance of the Express router
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.post("/new", (req, res) => {
  // Add the new message to the messages array
  const { messageText, username } = req.body;
  messages.push({ text: messageText, user: username, added: new Date() });

  // Redirect back to the home page to see the updated messages list
  res.redirect("/");
});

module.exports = indexRouter;
