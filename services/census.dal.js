const dal = require("./postgres_db");

const getAllCensus = () => {
  return new Promise(function (resolve, reject) {
    const sql = "SELECT * FROM census1 ORDER BY family_name ASC";
    dal.query(sql, [], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};

const getCensusByFamilyName = (id) => {
  return new Promise(function (resolve, reject) {
    const sql = "SELECT * FROM census1 WHERE family_name = $1";
    dal.query(sql, [id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};

module.exports = {
  getAllCensus,
  getCensusByFamilyName,
};
