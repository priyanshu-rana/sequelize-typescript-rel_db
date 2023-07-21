"use strict";
// import { expressjs } from "./app";
Object.defineProperty(exports, "__esModule", { value: true });
// const express = expressjs;
const expressJs = require("express");
const router = expressJs.Router();
router.get("/students");
router.post("/student", (req, res) => {
    res.json({ data: "create student" });
});
router.put("/student/:id", (req, res) => {
    res.json({ data: "update student" });
});
router.delete("/student/:id", (req, res) => {
    res.json({ data: "delete student" });
});
module.exports = router;
//# sourceMappingURL=routes.js.map