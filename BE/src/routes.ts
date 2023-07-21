import * as expressJs from "express";
import { createStudent, getStudents } from "./controller/student-controller";

const router = expressJs.Router();

router.get("/students", getStudents);

router.post("/student", createStudent);

//TODO
router.put(
  "/student/:id",
  (req: expressJs.Request, res: expressJs.Response) => {
    res.json({ data: "update student" });
  }
);

//TODO
router.delete(
  "/student/:id",
  (req: expressJs.Request, res: expressJs.Response) => {
    res.json({ data: "delete student" });
  }
);

module.exports = router;
