const PORT = process.env.PORT || 3001;

const express = require("express");

const app = express ();

const fs = require("fs");

const path = require("path");

const htmlRoute = require("./route/htmlRoute");

const apiRoute = require("./route/apiRoute");

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static("public"));
app.use(express.json());
app.use("/" , htmlRoute);
app.use("api" , apiRoute);

app.listen(PORT , () => {
    console.log("API server now on ${PORT}.")
});