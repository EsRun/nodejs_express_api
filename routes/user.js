const express = require("express");
const db = require("../database/dbQuery");
const router = express.Router();

// 아이디 확인
router.get("/", function (req, res, next) {
  const userinfo = req.query;
  db.checkId(userinfo, (rows) => {
    res.send(rows);
  });
});

// 로그인
router.get("/login", function (req, res, next) {
  const userinfo = req.query;
  db.loginProc(userinfo, (rows) => {
    res.send(rows);
  });
});

// 직원 정보
router.get("/member", function (req, res, next) {
  const userinfo = req.query;
  db.getMember(userinfo, (rows) => {
    res.send(rows);
  });
});

module.exports = router;
