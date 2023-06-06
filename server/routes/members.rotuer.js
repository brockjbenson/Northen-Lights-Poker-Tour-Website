const express = require("express");
const pool = require("../modules/pool");
const members = express.Router();

/**
 * GET route template
 */
members.get("/", (req, res) => {
  const query = `select * from members;`;

  pool
    .query(query)
    .then((results) => res.send(results.rows))
    .catch((err) => {
      console.log("Error GETting members", err);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
members.post("/", (req, res) => {
  // POST route code here
});

module.exports = members;
