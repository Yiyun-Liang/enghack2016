//Require uwaterloo api module
var uwaterlooApi = require('uwaterloo-api');

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
