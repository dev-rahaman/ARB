const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AwesomeResumeSchema = new Schema({
  bio: {
    type: String,
  },
  contacts: [
    {
      type: { type: String },
      value: { type: String },
    },
  ],
  languages: [
    {
      type: String,
    },
  ],
  expertise: [
    {
      type: String,
    },
  ],
  name: {
    type: String,
  },
  title: {
    type: String,
  },
  summary: {
    type: String,
  },
  experience: [
    {
      company: { type: String },
      position: { type: String },
      date: { type: String },
      description: { type: String },
    },
  ],
  projects: [
    {
      name: { type: String },
      description: { type: String },
      date: { type: String },
    },
  ],
  educations: [
    {
      degree: { type: String },
      date: { type: String },
    },
  ],
});

const AwesomeResume = mongoose.model("AwesomeResume", AwesomeResumeSchema);
module.exports = AwesomeResume;
