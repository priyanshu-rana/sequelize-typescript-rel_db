"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expressJs = require("express");
const student_controller_1 = require("./controller/student-controller");
const router = expressJs.Router();
router.get("/students", student_controller_1.getStudents);
router.post("/student", student_controller_1.createStudent);
//TODO
router.put("/student/:id", (req, res) => {
    res.json({ data: "update student" });
});
//TODO
router.delete("/student/:id", (req, res) => {
    res.json({ data: "delete student" });
});
module.exports = router;
//# sourceMappingURL=routes.js.map