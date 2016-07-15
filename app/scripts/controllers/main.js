'use strict';

/**
 * @ngdoc function
 * @name montlyCalendarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the montlyCalendarApp
 */
angular.module('montlyCalendarApp')
  .controller('MainCtrl', function ($scope, uiCalendarConfig, hollidayService, $timeout) {
    var vm = this;
    $scope.eventSources = [];
    $scope.events = [];
    vm.countryCode = 'US';
    /* config object */
    // $scope.uiConfig = {
    //   calendar:{
    //     height: 450,
    //     editable: true,
    //     header:{
    //       left: 'title',
    //       center: '',
    //       right: 'today prev,next'
    //     },
    //     // eventClick: $scope.alertOnEventClick,
    //     // eventDrop: $scope.alertOnDrop,
    //     // eventResize: $scope.alertOnResize,
    //     // eventRender: $scope.eventRender
    //   }
    // };
    $scope.supportedCountries  = {
      BE:'Belgium',
      BG:'Bulgaria',
      BR:'Brazil',
      CA:'Canada',
      CZ:'Czech Republic',
      DE:'Germany',
      ES:'Spain',
      FR:'France',
      GB:'United Kingdom',
      GT:'Guatemala',
      HR:'Croatia',
      HU:'Hungary',
      ID:'Indonesia',
      IN:'India',
      IT:'Italy',
      NL:'Netherlands',
      NO:'Norway',
      PL:'Poland',
      PR:'Puerto Rico',
      SI:'Slovenia',
      SK:'Slovakia',
      US:'United States',
    };

    vm.submitForm = function () {
      var startDate = moment(vm.startDate, 'MM-DD-YYYY');
      var endDate = moment(vm.startDate, "MM-DD-YYYY").add(vm.numberOfDays, 'days');
      $scope.eventSources = [];
      $scope.events.splice(0);
      $timeout(function () {
        uiCalendarConfig.calendars['monthlyCalendar'].fullCalendar('gotoDate', startDate);
      })
      hollidayService.getHollidays({
        country: vm.countryCode,
        year: startDate.year()
      }).then(function (data) {
        var holidays = data.data.holidays;
        for (var i in holidays){
            var holiday = holidays[i];

          for (var j = 0, len = holiday.length; j < len; j++) {
            var singleHoliday = holiday[j];
            var holidayEvent = {
              title: singleHoliday.name,
              start: moment(singleHoliday.date, 'YYYY-MM-DD').toDate(),
              allDay: true,
              stick : true,
              type: 'holiday'
            };
            $scope.events.push(holidayEvent);

          }
        }


      });
      var event = {
        start: startDate.toDate(),
        end: endDate.toDate(),
        allDay: true,
        stick : true
      };
      $scope.events.push(event);
    };



    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,

        dayRender: function (date, cell) {
          console.log(date, 'date '); //deleteinbuild
        },
        dayClick: $scope.alertEventOnClick,
        eventDrop: function () {
          console.log('bioy', arguments); //deleteinbuild
        },
        eventResize: $scope.alertOnResize,
        dayRender: function (date, cell) {

          // cell.css("background-color", "red");
        },
        eventRender: function (date, cell) {
          console.log(date.type, 'date.type '); //deleteinbuild
          if (date.type === 'holiday'){
            cell.css('background-color', 'orange');
          }
          console.log(arguments, 'arguments '); //deleteinbuild

        },
      }
    };



    $scope.eventSources = [$scope.events];



  });
