const express = require("express");
const path = require("path");

const productRoutes = express.Router();
const rootDir=require('../helper/baseAddress.js')


productRoutes.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "src","pages", "Home.html"));
});

module.exports = productRoutes;
