const mysql = require("mysql");
const dbConfig = require("./dcConfig");

const pool = mysql.createPool(dbConfig);

const db = {
  getConnection: (callback) => {
    pool.getConnection((err, conn) => {
      if (err) throw err;
      callback(conn);
    });
  },
};

module.exports = db;
