const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const my_info_schema = new Schema({
  name:  String,
  title: String,
  email:   String,
  dob: Date,
  employment: [{ company: String, start_date: Date, end_date: Date, job_title: String, description: String }],
  education: [{ school: String, start_date: Date, end_date: Date, description: String }],
  skills: [{ name: String, experience: String, frameworks: [String], libs: [String]}]
});

module.exports = my_info_schema;