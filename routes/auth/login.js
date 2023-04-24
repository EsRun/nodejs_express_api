const express = require("express");
const db = require("../../database/auth/authQuery");
const router = express.Router();

// 로그인
router.get("/login", function (req, res, next) {
  const userinfo = req.query;
  db.loginProc(userinfo, (rows) => {
    res.send(rows);
  });
});

module.exports = router;
