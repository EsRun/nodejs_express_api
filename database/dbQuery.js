const db = require("./dbPool");

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

// 직원 정보
const getMember = async (userinfo, callback) => {
  const query = "%" + userinfo.text + "%";
  const sql = `SELECT 
      a.name as userName,
      a.id as userId,
      a.email as userEmail,
      b.ug_name as userGrade
    FROM user AS a
      LEFT JOIN user_grade AS b
      ON b.idx = a.grade_idx
      WHERE CONCAT(a.name, b.ug_name) LIKE ?
      and a.del_check=0`;
  db.getConnection((conn) => {
    conn.query(sql, [query], (err, rows) => {
      err ? console.log(err) : callback(rows);
    });
    conn.release(); //사용후 connection 객체 반환
  });
};

module.exports = {
  checkId,
  loginProc,
  getMember,
};
