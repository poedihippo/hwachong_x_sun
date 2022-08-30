import dbConnect from "../../../lib/db";
import Student from "../../../models/Student";

dbConnect();

const methodApi = async (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
      register(req, res);
      break;
    case "GET":
      getStudents(req, res);
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

async function register(req, res) {
  const {
    name,
    mobile,
    email,
    birth,
    gender,
    parentsName,
    parentsMobile,
    address,
    zipCode,
    homeAddress,
    curGrade,
    precurSchool,
    majorInterested,
    destinationOfStudy,
    programInterested,
    planningYear,
    marketingSource,
    hasContactSun,
    contactPermission,
    imageList,
  } = req.body;

  // const userNameExist = await Student.findOne({name: name});
  // if(userNameExist) return res.status(400).send("Username already exists");

  // const emailExist = await Student.findOne({email:email});
  // if(emailExist) return res.status(400).send("Email already exists");

  try {
    const student = new Student({
      name,
      mobile,
      email,
      birth,
      gender,
      parentsName,
      parentsMobile,
      address,
      zipCode,
      homeAddress,
      curGrade,
      precurSchool,
      majorInterested,
      destinationOfStudy,
      programInterested,
      planningYear,
      marketingSource,
      hasContactSun,
      contactPermission,
      imageList,
    });

    await student.save();
    res.status(201).json(student);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ success: false });
  }
}

async function getStudents(req, res) {
  try {
    const Students = await Student.find().sort({ date: -1 });
    res.status(200).json(Students);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "failed" });
  }
}

async function deleteStudent(req, res) {
  try {
    const student = await Student.findByIdAndDelete(req.params._id);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "failed" });
  }
}
