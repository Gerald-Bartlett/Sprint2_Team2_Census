const express = require("express");
const router = express.Router();

router.use(express.static("public"));

const censusDal = require("../services/census.dal");

router.get("/", async (req, res) => {
  let allCensus = await censusDal.getAllCensus();
  if (allCensus.length === 0) res.render("norecord");
  else {
    res.render("census.ejs", { allCensus });
  }
});

router.get("/:id", async (req, res) => {
  let allCensus = await censusDal.getCensusByFamilyName(req.params.id);
  if (allCensus.length === 0) res.render("norecord");
  else {
    res.render("census.ejs", { allCensus });
  }
});

module.exports = router;
