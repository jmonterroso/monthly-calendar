'use strict';

/**
 * @ngdoc function
 * @name montlyCalendarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the montlyCalendarApp
 */
angular.module('montlyCalendarApp')
  .controller('MainCtrl', function ($scope, uiCalendarConfig) {
    var vm = this;
    $scope.eventSources = [];
    $scope.events = [];
    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'title',
          center: '',
          right: 'today prev,next'
        },
        // eventClick: $scope.alertOnEventClick,
        // eventDrop: $scope.alertOnDrop,
        // eventResize: $scope.alertOnResize,
        // eventRender: $scope.eventRender
      }
    };
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    vm.submitForm = function () {
      $scope.eventSources = [];

      var startDate = moment(vm.startDate, 'MM-DD-YYYY');
      var endDate = moment(vm.startDate, "MM-DD-YYYY").add(vm.numberOfDays, 'days');
      var event = {
        start: startDate.toDate(),
        end: endDate.toDate(),
        allDay: true
      };
      $scope.events.push(event);
    };



    vm.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'month basicWeek basicDay agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        dayClick: $scope.alertEventOnClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize
      }
    };

    // $scope.events = [
    //   {title: 'All Day Event',start: new Date(y, m, 1)},
    //   {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
    //   {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
    //   {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
    //   {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
    //   {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
    // ];


    $scope.eventSources = [$scope.events];



  });
