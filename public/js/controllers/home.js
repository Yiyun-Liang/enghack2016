// var uwaterlooapi = require('uwaterloo-api');

angular.module('MyApp')
  .controller('homeCtrl', function ($scope, $auth, $http) {
    $scope.isEmptyCourse = true;
    $scope.courseInfo = {
      subject: 'Subject',
      catalog_number: 000
    }
    $scope.addCourse = function (subject, number) {
      var data = {
        'course_subject' : subject,
        'course_number' : number
      }
      $http.post('/courses', data)
      .then(
        function success(response) {
          $scope.goToCourse(subject, number)
        },
        function error(response) {
          console.log(response);
        }
      )
    }
    $scope.goToCourse = function (subject, number) {
      $scope.isEmptyCourse = false;
      $http.get('/courses' + subject + '/' + number)
      .then(
        function success(response) {
          // console.log(response.data);
          $scope.courseInfo = response.data;
        },
        function error(response) {
          console.log(response.message);
        }
      )
      $http.get('courses/' + subject + '/' + number + '/exams').then(
        function success(response) {
          $scope.examschedules = response.data.sections;
          // console.log($scope.examschedules);
        },
        function err(response) {
          console.log(response.message);
        }
      );
    }
    /*
    $scope.groups = [
      {
        id: 1,
        name: "124 section 002",
        course_name: "ECE 124",
        course_id: "013168",
        member_num: "4"
      },
      {
        id: 2,
        name: "106 section 002",
        course_name: "ECE 106",
        course_id: "013167",
        member_num: "10"
      },
      {
        id: 3,
        name: "155 lab 125",
        course_name: "ECE 155",
        course_id: "013170",
        member_num: "3"
      },
      {
        id: 4,
        name: "ELPE general",
        course_name: "EMLS 129r",
        course_id: "121132",
        member_num: "3"
      }
    ];*/
  });
