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
 }, function(error, resource) {
    res.send(resource.data);
});
}
