const express = require("express");
const db = require("../../database/dbQuery");
const router = express.Router();

// 회원가입
router.get("/join", function (req, res, next) {
  const userinfo = req.query;
  db.loginProc(userinfo, (rows) => {
    res.send(rows);
  });
});

module.exports = router;
