import formidable from "formidable-serverless";
import fs from "fs";
import moment from "moment";
import slugify from "slugify";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

// const post = async (req, res) => {
//   const form = new formidable.IncomingForm();
//   console.log(form);
//   // form.parse(req, async function (err, fields, files) {
//   //   await saveFile(files.file);
//   //   return res.status(201).send("");
//   // });
// };

// const saveFile = async (file) => {
//   const data = fs.readFileSync(file.path);
//   fs.writeFileSync(`./public/${file.name}`, data);
//   await fs.unlinkSync(file.path);
//   return;
// };

const post = async (req, res) => {
  const timeStamp = moment().format("DD-MM-YYYY");

  fs.mkdir(`./public/${timeStamp}`, { recursive: true }, function (err) {
    return console.log(err);
  });

  const data = await new Promise((resolve, reject) => {
    const form = formidable({
      multiple: true,
      uploadDir: `./public/${timeStamp}`,
    });

    form.keepExtensions = true;
    form.keepFileName = true;

    form.on("fileBegin", function (name, file) {
      file.path = path.join(`public/${timeStamp}`, slugify(file.name));
    });

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve(files);
    });
  });

  return res.status(200).json(data);
};

const methodApi = (req, res) => {
  req.method === "POST"
    ? post(req, res)
    : req.method === "PUT"
    ? console.log("PUT")
    : req.method === "DELETE"
    ? console.log("DELETE")
    : req.method === "GET"
    ? console.log("GET")
    : res.status(404).send("");
};

export default methodApi;
