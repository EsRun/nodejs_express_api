const express = require("express");
const db = require("../../database/dbQuery");
const router = express.Router();

// 사용자 정보
router.get("/member", function (req, res, next) {
  const userinfo = req.query;
  db.getMember(userinfo, (rows) => {
    res.send(rows);
  });
});

module.exports = router;
