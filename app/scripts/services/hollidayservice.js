'use strict';

/**
 * @ngdoc service
 * @name montlyCalendarApp.hollidayService
 * @description
 * # hollidayService
 * Service in the montlyCalendarApp.
 */
angular.module('montlyCalendarApp')
  .service('hollidayService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.apiKey = 'ae60b910-001d-416b-a4dd-3871e84c1840';

    this.getHollidays = function (payload) {
      var url = 'https://holidayapi.com/v1/holidays?key='+this.apiKey + '&country=' + payload.country + '&year=' + payload.year;
      return $http.get(url);
    };
  });
