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
  const sql = `SELECT idx FROM user WHERE id=? AND password=? AND del_check=0`;
  db.getConnection((conn) => {
    conn.query(sql, [userinfo.userid, userinfo.userpw], (err, rows) => {
      err ? console.log(err) : callback(rows ? rows.length > 0 : false);
    });
    conn.release();
  });
};

module.exports = {
  loginProc,
};
