const express = require("express");
const db = require("../../database/dbQuery");
const router = express.Router();

// 사용자 리스트
router.get("/userList", function (req, res, next) {
  const userinfo = req.query;
  db.getMember(userinfo, (rows) => {
    res.send(rows);
  });
});

// 사용자 정보
router.get("/user/:id", function (req, res, next) {
  const userinfo = req.query;
  db.getMember(userinfo, (rows) => {
    res.send(rows);
  });
});

module.exports = router;
