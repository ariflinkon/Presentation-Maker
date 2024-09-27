const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ageYkT!oogY9XhEx',
  database: 'presentation',
});

db.connect();

const savePresentation = (presentation) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO presentations SET ?', presentation, (err, result) => {
      if (err) reject(err);
      resolve(result.insertId);
    });
  });
};

const getPresentation = (id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM presentations WHERE id = ?', [id], (err, results) => {
      if (err) reject(err);
      resolve(results[0]);
    });
  });
};

module.exports = { savePresentation, getPresentation };
