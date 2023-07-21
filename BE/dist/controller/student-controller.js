"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStudent = void 0;
const student_model_1 = require("../models/student.model");
const createStudent = async (req, res, next) => {
    let student = await student_model_1.Student.create({});
};
exports.createStudent = createStudent;
//# sourceMappingURL=student-controller.js.map