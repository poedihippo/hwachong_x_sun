import { useState } from "react";
import Button from "../../global/button/button";
import { TextForm, RadioForm, SelectForm } from "../../global/form/form";
import classes from "./register.module.css";
import Select from "react-select";
import axios from "axios";
import FormImage from "../../global/form/form-image/form-image";
import Image from "next/image";
import moment from "moment";

// redux
import { connect } from "react-redux";
import { uploadAction, sendAction } from "../../../store/actions/mediaActions";

const RegisterForm = ({ uploadAction, sendAction, media }) => {
  const [selectCars, setSelectCars] = useState();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");
  const [parentsName, setParentsName] = useState("");
  const [parentsMobile, setParentsMobile] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [homeAddress, setHomeAddress] = useState("");

  // select form
  const [curGrade, setCurGrade] = useState("");
  const [precurSchool, setPrecurSchool] = useState("");
  const [majorInterested, setMajorInterested] = useState("");
  const [destinationOfStudy, setDestinationOfStudy] = useState("");
  const [programInterested, setProgramInterested] = useState("");
  const [planningYear, setPlanningYear] = useState("");
  const [marketingSource, setMarketingSource] = useState("");
  const [hasContactSun, setHasContactSun] = useState(false);
  const [contactPermission, setContactPermission] = useState(false);

  const [imageList, setImageList] = useState([]);

  const [images, setImages] = useState([]);
  const [imagesPrev, setImagesPrev] = useState([]);
  const [url, setUrl] = useState("");
  // const [imagesList, setImagesList] = useState([]);

  const genderOption = [
    {
      id: 1,
      name: "male",
    },
    {
      id: 2,
      name: "female",
    },
  ];

  var cars = [
    { value: 2022, label: 2022, id: 1 },
    { value: 2023, label: 2023, id: 2 },
    { value: 2024, label: 2024, is: 3 },
  ];

  const handleChange = (files) => {
    let list = [];
    // let date = moment().format("DD-MM-YYYY");
    setImages(files);

    for (let i = 0; i < files.length; i++) {
      console.log(files[i]);
      list.push(files[i]);
    }
    setImagesPrev(list);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const upload = async () => {
      let imagesArr = [];
      for (let i = 0; i < images.length; i++) {
        const data = new FormData();
        // for (let i = 0; i < image.length; i++) {
        //   data.append("file", image[i]);
        // }
        data.append("file", images[i]);
        data.append("upload_preset", "albaprogrammer");
        data.append("cloud_name", "dgdmhrjoy");
        await fetch("https://api.cloudinary.com/v1_1/dgdmhrjoy/image/upload", {
          method: "post",
          body: data,
        })
          .then((resp) => resp.json())
          .then((data) => {
            setUrl(data.url);
            console.log(data.url);
            imagesArr.push({ name: images[i].name, url: data.url });
          })
          .catch((err) => console.log(err));
      }
      setImageList(imagesArr);
      const data = {
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
        imageList: imagesArr,
      };
      console.log(data);

      try {
        const res = await axios.post(`/api/student`, data, {
          "Content-Type": "application/json",
        });
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    };

    upload();
  };

  return (
    <div className={classes.register_form}>
      <h1>Register Now</h1>
      <form onSubmit={(e) => handleSubmit(e)} encType="multipart/form-data">
        <div className={classes.wrapper}>
          <div className={classes.row}>
            <TextForm
              label="Student Name"
              name="student_name"
              placeholder="Input student name here"
              type="text"
              setValue={setName}
              value={name}
              required={true}
            />
            <TextForm
              label="Mobile Phone"
              name="mobile_phone"
              placeholder="+62"
              type="number"
              setValue={setMobile}
              value={mobile}
              required={true}
            />
            <TextForm
              label="Email"
              name="email"
              placeholder="Input email here"
              type="email"
              setValue={setEmail}
              value={email}
              required={true}
            />

            <TextForm
              label="Date Of Birth"
              name="birth"
              type="date"
              setValue={setBirth}
              value={birth}
              required={true}
            />

            <RadioForm count={genderOption} setValue={setGender} />

            <TextForm
              label="Parents Name"
              name="parents_name"
              placeholder="Input parents name"
              type="text"
              setValue={setParentsName}
              value={parentsName}
              required={true}
            />

            <TextForm
              label="Parents Mobile Phone"
              name="parents_mobile"
              placeholder="+62"
              type="number"
              setValue={setParentsMobile}
              value={parentsMobile}
              required={true}
            />
            <TextForm
              label="Full Address"
              name="full_address"
              placeholder="Input full address here"
              type="text"
              setValue={setAddress}
              value={address}
              required={true}
            />
            <TextForm
              label="Post Code/Code Area"
              name="post_code"
              placeholder="Input post code"
              type="number"
              setValue={setZipCode}
              value={zipCode}
              required={true}
            />
            <TextForm
              label="Home Address"
              name="home_address"
              placeholder="Input home address"
              type="text"
              setValue={setHomeAddress}
              value={homeAddress}
              required={true}
            />
          </div>
          <div className={classes.row}>
            <TextForm
              name="current_education_grade"
              placeholder="Select current education"
              label="Current Education Grade"
              type="text"
              setValue={setCurGrade}
              value={curGrade}
              required={true}
            />

            <TextForm
              name="current_school"
              placeholder="Select name of previous/current school"
              label="Name of Previous/Current School"
              type="text"
              setValue={setPrecurSchool}
              value={precurSchool}
              required={true}
            />

            <TextForm
              name="major_interested"
              placeholder="Select major interested"
              label="Major Interested"
              type="text"
              setValue={setMajorInterested}
              value={majorInterested}
              required={true}
            />

            <TextForm
              name="destination_study"
              placeholder="Select destination study"
              label="Destination Study"
              type="text"
              setValue={setDestinationOfStudy}
              value={destinationOfStudy}
              required={true}
            />

            <TextForm
              name="program_interested"
              placeholder="Select program interested"
              label="Program Interested"
              type="text"
              setValue={setProgramInterested}
              value={programInterested}
              required={true}
            />

            <SelectForm
              data={cars}
              placeholder="Select Planning Year"
              label="Planning Year"
              setValue={setPlanningYear}
            />

            <SelectForm
              data={cars}
              placeholder="Select"
              label="Know this Event from?"
              setValue={setMarketingSource}
            />

            <div className={classes.file_input}>
              <input
                multiple
                type="file"
                onChange={(e) => handleChange(e.target.files)}
                id="file"
                className={classes.file}
              ></input>

              <label htmlFor="file">
                Select file
                {/* <p className={classes.file_name}></p> */}
              </label>
              <ul style={{ paddingLeft: "20px" }}>
                <li>Format JPG/PNG/JPEG</li>
                <li>Max 10mb</li>
                <li>Format Name: (name)_file1</li>
              </ul>
            </div>
            <div style={{ display: "flex", margin: "10px 0" }}>
              {imagesPrev &&
                imagesPrev.map((file, idx) => {
                  return (
                    <div key={idx}>
                      <Image
                        src={URL.createObjectURL(file)}
                        width={100}
                        height={100}
                        objectFit="contain"
                        alt={`file ${idx}`}
                      />
                    </div>
                  );
                })}
            </div>

            <div>
              <p>Ever Contact SUN Office?</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "150px",
                  justifyContent: "space-evenly",
                }}
              >
                <h3 style={{ margin: "0" }}>No</h3>
                <label className={classes.switch}>
                  <input
                    type="checkbox"
                    onChange={(e) => setHasContactSun(!hasContactSun)}
                  />
                  <span className={`${classes.slider} ${classes.round}`}></span>
                </label>
                <h3 style={{ margin: "0" }}>Yes</h3>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.submit}>
          <div>
            <label className={classes.container}>
              <input
                type="checkbox"
                onChange={(e) => setContactPermission(!contactPermission)}
              />
              <span className={classes.checkmark}></span>
              <p>
                By checking this box, you agree to be contacted By SUN Education
                Group and its partner universities/collages via email/text
                message/phone
              </p>
            </label>
          </div>

          <br />

          <Button btn_color={"#F2652F"} type="submit">
            Submit
          </Button>
        </div>
      </form>
      {/* <FormImage /> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  media: state.media,
});

export default connect(mapStateToProps, { uploadAction, sendAction })(
  RegisterForm
);
