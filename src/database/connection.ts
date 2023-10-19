const Sqlite3 = require("sqlite3");
const db = new Sqlite3.Database("database.db");

db.serialize(() => {
  db.get(
    "SELECT * FROM sqlite_master where type='sqlite' and name='patients' ",
    (err, row) => {
      if (err) {
        console.log(err);
      } else if (!row) {
        db.run(
          "CREATE TABLE patients(national_id TEXT UNIQUE PRIMARY KEY, name TEXT , frequent_sickness TEXT ",
          (error, response) => {
            if (err) {
              console.log(error);
            } else {
              console.log("Database created successfully");
            }
          }
        );
      }
    }
  );

  db.get(
    "SELECT * FROM sqlite_master where type='sqlite' and name='records' ",
    (err, row) => {
      if (err) {
        console.log(err);
      } else if (!row) {
        db.run(
          "CREATE TABLE records(patient_id INTEGER, body_temperature REAL, heart_rate INTEGER, deduction TEXT DEFAULT 'fine', FOREIGN KEY(patient_id) REFERENCES patients(national_id) ON DELETE CASCADE) ",
          (error, response) => {
            if (err) {
              console.log(error);
            } else {
              console.log("Database created successfully", response);
            }
          }
        );
      }
    }
  );
});

export default db;
