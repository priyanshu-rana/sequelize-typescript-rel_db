import * as expressjs from "express";
import connection from "./db/config";
import { json, urlencoded } from "body-parser";

const apiRoutes = require("./routes");
const dotenv = require("dotenv");

dotenv.config();

const app = expressjs();
const PORT = process.env.PORT_NO;

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(
  (
    err: Error,
    req: expressjs.Request,
    res: expressjs.Response,
    next: expressjs.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);
app.use("/api", apiRoutes);

connection
  .sync()
  .then(() => console.log("Database synced successfully"))
  .catch((err) => console.log("Error :", err));

// sequelize
//   .authenticate()
//   .then(() => console.log("Connection made successfully"))
//   .catch((e: Error) => console.log(e.message));

app.listen(PORT, () => console.log("Server is running on port no. " + PORT));
