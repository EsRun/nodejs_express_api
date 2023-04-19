const crypto = require("crypto");
const db = require("./../dbPool");

// 아이디 확인
const checkId = (userinfo, callback) => {
  const sql = `SELECT idx FROM user WHERE id=? AND del_check=0`;
  db.getConnection((conn) => {
    conn.query(sql, [userinfo.userid], (err, rows) => {
      err ? console.log(err) : callback(rows ? rows.length > 0 : false);
    });
    conn.release();
  });
};

// 로그인
const loginProc = (userinfo, callback) => {
  console.log(
    crypto.createHash("sha512").update(userinfo.userpw).digest("base64")
  );
  const sql = `SELECT idx FROM user WHERE id=? AND password=? AND del_check=0`;
  db.getConnection((conn) => {
    conn.query(sql, [userinfo.userid, userinfo.userpw], (err, rows) => {
      err ? console.log(err) : callback(rows ? rows.length > 0 : false);
    });
    conn.release();
  });
};

// 회원가입
const join = (userinfo, callback) => {
  const hashPw = crypto
    .createHash("sha512")
    .update(userinfo.userpw)
    .digest("base64");
  const sql = `INSERT INTO user (id, password, name, email, grade_idx) VALUES(?, ?, ?, ?, ?)`;
  db.getConnection((conn) => {
    conn.query(
      sql,
      [
        userinfo.userid,
        userinfo.userpw,
        userinfo.username,
        userinfo.useremail,
        userinfo,
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
