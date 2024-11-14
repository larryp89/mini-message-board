// Import express module into the project
const express = require("express");

// Creates an instance of the express application (used to define routes, middleware, and app-specific settings)
const app = express();

// Import the path module from node (provides utilities for working with file/directory paths)
const path = require("node:path");

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Allows you to serve static files from a public directory
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// Configure the app to use EJS and specify the directory for EJS templates
app.set("views", path.join(__dirname, "views")); // Tells Express to look for template files in the views directory.
app.set("view engine", "ejs"); // Sets EJS as the templating engine, allowing you to render EJS templates with the res.render method

// Get routes from routers
const indexRouter = require("./routes/indexRouter");
const formRouter = require("./routes/formRouter");

app.use("/", indexRouter);
app.use("/new", formRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
