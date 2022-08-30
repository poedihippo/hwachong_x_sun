const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  birth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  parentsName: {
    type: String,
    required: true,
  },
  parentsMobile: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
    required: true,
  },
  homeAddress: {
    type: String,
    required: true,
  },
  curGrade: {
    type: String,
  },
  precurSchool: {
    type: String,
    required: true,
  },
  majorInterested: {
    type: String,
    required: true,
  },
  destinationOfStudy: {
    type: String,
    required: true,
  },
  programInterested: {
    type: String,
    required: true,
  },
  planningYear: {
    type: Number,
    required: true,
  },
  marketingSource: {
    type: String,
    required: true,
  },
  hasContactSun: {
    type: Boolean,
    required: true,
  },
  contactPermission: {
    type: Boolean,
  },
  create_date: {
    type: Date,
    default: Date.now,
  },
  imageList: [
    {
      name: String,
      url: String,
    },
  ],
});

module.exports =
  mongoose.models.Student || mongoose.model("Student", StudentSchema);
