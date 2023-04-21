const express = require("express");
const db = require("../../database/dbQuery");
const router = express.Router();

// 아이디 확인
router.get("/idCheck", function (req, res, next) {
  const userinfo = req.query;
  db.checkId(userinfo, (rows) => {
    res.send(rows);
  });
});

// 회원가입
router.get("/join", function (req, res, next) {
  const userinfo = req.query;
  db.loginProc(userinfo, (rows) => {
    res.send(rows);
  });
});

module.exports = router;
