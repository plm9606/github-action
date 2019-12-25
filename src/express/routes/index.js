var express = require("express");
var router = express.Router();
const axios = require("axios").default;
const getData = require("../../map");
/* GET home page. */
router.get("/", async function(req, res, next) {
  console.log("fasdfasdfd");
  let data;
  try {
    data = await getData("반포 스터디 카페");
    console.log(data);
  } catch (e) {
    console.log(e);
  } finally {
    res.json({ result: data });
  }
});

module.exports = router;
