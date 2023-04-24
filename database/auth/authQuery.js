const crypto = require("crypto");
const db = require("./../dbPool");

// 아이디 확인
const checkId = (userInfo, callback) => {
  const sql = `SELECT idx FROM user WHERE id=? AND del_check=0`;
  db.getConnection((conn) => {
    conn.query(sql, [userInfo.userId], (err, rows) => {
      err ? console.log(err) : callback(rows ? rows.length > 0 : false);
    });
    conn.release();
  });
};

// 로그인
const loginProc = (userInfo, callback) => {
  console.log(
    crypto.createHash("sha512").update(userInfo.userPw).digest("base64")
  );
  const sql = `SELECT idx FROM user WHERE id=? AND password=? AND del_check=0`;
  db.getConnection((conn) => {
    conn.query(sql, [userInfo.userId, userInfo.userPw], (err, rows) => {
      err ? console.log(err) : callback(rows ? rows.length > 0 : false);
    });
    conn.release();
  });
};

// 회원가입
const join = (userInfo, callback) => {
  const hashPw = crypto
    .createHash("sha512")
    .update(userInfo.userPw)
    .digest("base64");
  const sql = `INSERT INTO user (id, password, name, email, grade_idx) VALUES(?, ?, ?, ?, ?)`;
  db.getConnection((conn) => {
    conn.query(
      sql,
      [
        userInfo.userId,
        userInfo.userPw,
        userInfo.userName,
        userInfo.userEmail,
        userInfo,
        usergrade,
      ],
      (err, rows) => {
        err ? console.log(err) : callback(rows ? rows.length > 0 : false);
      }
    );
    conn.release();
  });
};

module.exports = {
  checkId,
  loginProc,
  join,
};
