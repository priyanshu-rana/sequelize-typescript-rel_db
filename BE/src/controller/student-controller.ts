import * as express from "express";
import { Student } from "../models/student.model";

export const createStudent: express.RequestHandler = async (req, res, next) => {
  const data = req.body;
  let student = await Student.create({ ...data });
  return res
    .status(200)
    .json({ message: "Student created successfully !!", data: student });
};

export const getStudents: express.RequestHandler = async (req, res, next) => {
  let students: Student[] = await Student.findAll();
  return res
    .status(200)
    .json({ message: "Students fetched successfully !!", data: students });
};
