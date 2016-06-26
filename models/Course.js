var mongoose = require('mongoose');

var schemaOptions = {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
};

var courseSchema = new mongoose.Schema({
  course_id: Number,
  course_subject: String,
  course_number: Number,
  users: [Number]
}, schemaOptions);

var Course = mongoose.model('Course', courseSchema);

module.exports = Course;
