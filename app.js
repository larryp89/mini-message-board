// Import express module into the project
const express = require("express");

// Creates an instance of the express application (used to define routes, middleware, and app-specific settings)
const app = express();

// Import the path module from node (provides utilities for working with file/directory paths)
const path = require("node:path");

// Allows you to serve static files from a public directory
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// Configure the app to use EJS and specify the directory for EJS templates
app.set("views", path.join(__dirname, "views")); // Tells Express to look for template files in the views directory.
app.set("view engine", "ejs"); // Sets EJS as the templating engine, allowing you to render EJS templates with the res.render method

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/new", (req, res) => {
  res.render("messageForm");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
