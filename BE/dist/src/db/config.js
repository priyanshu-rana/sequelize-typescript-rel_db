"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const student_model_1 = require("../models/student.model");
const dotenv = require("dotenv");
dotenv.config();
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: process.env.SECTET_DB_PASS,
    database: "college_db",
    logging: false,
    models: [student_model_1.Student],
});
exports.default = connection;
//# sourceMappingURL=config.js.map