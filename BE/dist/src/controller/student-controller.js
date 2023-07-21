"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudents = exports.createStudent = void 0;
const student_model_1 = require("../models/student.model");
const createStudent = async (req, res, next) => {
    const data = req.body;
    let student = await student_model_1.Student.create(Object.assign({}, data));
    return res
        .status(200)
        .json({ message: "Student created successfully !!", data: student });
};
exports.createStudent = createStudent;
const getStudents = async (req, res, next) => {
    let students = await student_model_1.Student.findAll();
    return res
        .status(200)
        .json({ message: "Students fetched successfully !!", data: students });
};
exports.getStudents = getStudents;
//# sourceMappingURL=student-controller.js.map