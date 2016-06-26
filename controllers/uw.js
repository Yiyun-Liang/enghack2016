//Require uwaterloo api module
var uwaterlooApi = require('uwaterloo-api');
var Course = require('../models/Course');

//Instantiate the client
var uwclient = new uwaterlooApi({
  API_KEY : '04b3e13f6a87bbb610ca8a85a9cdb0b4'
});

/*
* GET /courses/:course_id
*/
exports.getCourseById = function (req, res, next) {
  var course_id = req.params.course_id;
  uwclient.get('/courses/{course_id}', {
    course_id : course_id
  }, function(error, response) {
    res.send(response.data);
  });
}

/*
* POST /course/:course_id
*/
exports.coursePost = function (req, res, next) {
  Course.findOne({ course_id: req.body.course_id }, function(err, course) {
    if (course) {
    return res.status(400).send({ msg: 'The course you have entered is already in your list.' });
    }
    course = new Course({
      course_id: req.body.course_id,
      users: req.body.users
    });
    course.save(function(err) {
      res.send({ course: course });
    });
  });
}

/*
* DELETE /course/:course_id
*/
exports.courseDelete = function(req, res, next) {
  Course.remove({ _id: req.course_id }, function(err) {
    res.send({ msg: 'Your course has been removed.' });
  });
};

/*
 * GET /courses/:subject/:number
 */
 exports.getCourseInfo = function (req, res, next) {
   var course_subject = req.params.course_subject;
   var course_number = req.params.course_number;
   uwclient.get('/courses/{course_subject}/{course_number}', {
     course_subject: course_subject,
     course_number: course_number
   }, function (error, response) {
     res.send(response.data);
   });
 }

 /*
 * POST /course/:course_subject/:course_number
 */
 exports.courseInfoPost = function (req, res, next) {
   assert(req.body.course_id, 'course_id cannot be blank');
   assert(req.body.course_subject, 'course_subject cannot be blank');
   assert(req.body.course_number, 'course_number cannot be blank');

   Course.findOne({ course_id: req.body.course_id }, function(err, course) {
     if (course) {
     return res.status(400).send({ msg: 'The course you have entered is already in your list.' });
     }
     course = new Course({
       course_id: req.body.course_id,
       course_subject: req.body.course_subject,
       course_number: req.body.course_number,
       users: req.body.users
     });
     course.save(function(err) {
       res.send({ course: course });
     });
   });
 }

 /*
 * DELETE /course/:course_subject/:course_number
 */
 exports.courseInfoDelete = function(req, res, next) {
   Course.remove({ course_id: req.course_id }, function(err) {
     res.send({ msg: 'Your course has been removed.' });
   });
 };
/*
 * GET /courses/:subject/:number/exams
 */
 exports.getCourseExamSchedule = function (req, res, next) {
   var course_subject = req.params.course_subject;
   var course_number = req.params.course_number;
   // console.log(course_subject, course_number);
   uwclient.get('/courses/{course_subject}/{course_number}/examschedule',{
     course_subject: course_subject,
     course_number: course_number
   }, function (error, response) {
     res.send(response.data);
   });
 }
