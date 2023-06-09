const db = require("./../dbPool");

// 사용자 리스트
const getMember = async (userInfo, callback) => {
  const query = "%" + userInfo.text + "%";
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
      err ? callback(err) : callback(rows);
    });
    conn.release();
  });
};

// 사용자 정보
const getUser = async (userInfo, callback) => {
  const sql = `SELECT 
      a.name as userName,
      a.id as userId,
      a.email as userEmail,
      a.reg_date as userRegDate,
      a.rc_time as userRcTime,
      b.ug_name as userGrade
    FROM user AS a
      LEFT JOIN user_grade AS b
      ON b.idx = a.grade_idx
      WHERE a.idx = ?
      and a.del_check=0`;
  db.getConnection((conn) => {
    conn.query(sql, [userInfo.idx], (err, rows) => {
      err ? callback(err) : callback(rows);
    });
    conn.release();
  });
};

module.exports = {
  getMember,
  getUser,
};
