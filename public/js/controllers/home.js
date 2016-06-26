// var uwaterlooapi = require('uwaterloo-api');

angular.module('MyApp')
  .controller('homeCtrl', function ($scope, $auth, $http) {

    $http.get('courses/013168')
    .then(
      function success(response) {
        $scope.currentCourse = response.data;
      },
      function err(response) {
        console.log('Failed');
      }
    );

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
    ];
  });
