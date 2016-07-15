'use strict';

/**
 * @ngdoc function
 * @name montlyCalendarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the montlyCalendarApp
 */
angular.module('montlyCalendarApp')
  .controller('MainCtrl', function () {
    var vm = this;
    vm.submitForm = function () {
      console.log(vm.startDate, 'vm.startDate '); //deleteinbuild
    };

  });
