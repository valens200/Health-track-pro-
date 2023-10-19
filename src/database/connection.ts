const Sqlite3 = require("sqlite3");
const db = new Sqlite3.Database("../../database.db");

db.run(
  "CREATE TABLE IF NOT EXISTS patients(national_id TEXT UNIQUE PRIMARY KEY, name TEXT , frequent_sickness TEXT )"
);

db.run(
  "CREATE TABLE IF NOT EXISTS records(patient_id INTEGER, body_temperature REAL, heart_rate INTEGER, deduction TEXT DEFAULT 'fine', FOREIGN KEY(patient_id) REFERENCES patients(national_id) ON DELETE CASCADE) "
);

export default db;
