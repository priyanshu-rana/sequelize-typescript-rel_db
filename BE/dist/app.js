"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expressjs = require("express");
const config_1 = require("./db/config");
const body_parser_1 = require("body-parser");
const apiRoutes = require("./routes");
const dotenv = require("dotenv");
dotenv.config();
const app = expressjs();
const PORT = process.env.PORT_NO;
app.use("/api", apiRoutes);
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: false }));
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
// const sequelize = new Sequelize(
//   "college_db",
//   "root",
//   process.env.SECTET_DB_PASS,
//   { dialect: "mysql" }
// );
// sequelize
//   .authenticate()
//   .then(() => console.log("Connection made successfully"))
//   .catch((e: Error) => console.log(e.message));
config_1.default
    .sync()
    .then(() => console.log("Database synced successfully"))
    .catch((err) => console.log("Error :", err));
app.get("/", (req, res) => {
    res.status(200).json({ data: "This is the response for data testing" });
});
app.listen(PORT, () => console.log("Server is running on port no. " + PORT));
//# sourceMappingURL=app.js.map