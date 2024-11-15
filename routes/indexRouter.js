const crypto = require("crypto");

const convertDate = (date) =>
  date.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: convertDate(new Date()),
    id: crypto.randomUUID(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: convertDate(new Date()),
    id: crypto.randomUUID(),
  },
  {
    text: "Decent App!",
    user: "Elon",
    added: convertDate(new Date()),
    id: crypto.randomUUID(),
  },
];

// Imports the Router function from the Express module (via destructuring)
const { Router } = require("express");

// Create an instance of the Express router
const indexRouter = Router();

// Create main GET index route
indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

// Route to get message by id
indexRouter.get("/messages/:id", (req, res) => {
  const messageID = req.params.id; // Get the message id from the URL
  const message = messages.find((m) => messageID === m.id);
  res.render("messageDetail", { message });
});

// Create POST route
indexRouter.post("/new", (req, res) => {
  // Add the new message to the messages array
  const { messageText, username } = req.body;
  messages.push({
    text: messageText,
    user: username,
    added: convertDate(new Date()),
    id: crypto.randomUUID(),
  });

  // Redirect back to the home page to see the updated messages list
  res.redirect("/");
});

module.exports = indexRouter;
