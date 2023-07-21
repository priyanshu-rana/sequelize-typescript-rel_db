import { Sequelize } from "sequelize-typescript";
import { Student } from "../models/student.model";
const dotenv = require("dotenv");

dotenv.config();

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: process.env.SECTET_DB_PASS,
  database: "college_db",
  logging: false,
  models: [Student],
});

export default connection;
