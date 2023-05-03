const express = require("express");
const db = require("../../database/auth/authQuery");
const router = express.Router();
import crypto from "crypto";

const createHashedPassword = (password) => {
  return crypto.createHash("sha512").update(password).digest("base64");
};

// 아이디 확인
router.get("/idCheck", function (req, res, next) {
  const userinfo = req.query;
  db.checkId(userinfo, (rows) => {
    res.send(rows);
  });
});

// 회원가입
router.get("/join", function (req, res, next) {
  console.log(createHashedPassword("aa1234"));
  const userinfo = req.query;
  db.loginProc(userinfo, (rows) => {
    res.send(rows);
  });
});

module.exports = router;
