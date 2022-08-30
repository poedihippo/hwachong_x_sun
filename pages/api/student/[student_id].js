import dbConnect from "../../../lib/db";
import Student from "../../../models/Student";

dbConnect();

const methodApi = async (req, res) => {
  const { method } = req;

  switch (method) {
    // case "POST":
    //   register(req, res);
    //   break;
    case "GET":
      getStudent(req, res);
      break;
    case "DELETE":
      deleteStudent(req, res);
      break;
    default:
      res.status(400).json({ success: false });
  }
};

// methodApi(req, res);
export default methodApi;

async function getStudent(req, res) {
  const { student_id } = req.query;

  try {
    // console.log(student_id);
    const student = await Student.findById(student_id).sort({ date: -1 });
    res.status(200).json(student);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "failed" });
  }
}

async function deleteStudent(req, res) {
  const { student_id } = req.query;
  try {
    console.log(req.params);
    const student = await Student.findByIdAndDelete(student_id);
    res.status(200).json(student);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "failed" });
  }
}
