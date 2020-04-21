const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/workout",
    {
        useNewUrlParser: true,
    }
);

// Requiring our routes
require("./routes/api-routes.js.js.js.js")(app);
require("./routes/html-routes.js.js.js.js")(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
