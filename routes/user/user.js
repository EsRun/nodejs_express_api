const express = require("express");
const db = require("../../database/user/userQuery");
const router = express.Router();

// 사용자 리스트
router.get("/userlist", function (req, res, next) {
  const userinfo = req.query;
  db.getMember(userinfo, (rows) => {
    res.send(rows);
  });
});

// 사용자 정보
router.get("/:idx", function (req, res, next) {
  const userinfo = req.params;
  db.getUser(userinfo, (rows) => {
    res.send(rows);
  });
});

module.exports = router;
