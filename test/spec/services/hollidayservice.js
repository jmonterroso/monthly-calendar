'use strict';

describe('Service: hollidayService', function () {

  // load the service's module
  beforeEach(module('montlyCalendarApp'));

  // instantiate service
  var hollidayService;
  beforeEach(inject(function (_hollidayService_) {
    hollidayService = _hollidayService_;
  }));

  it('should do something', function () {
    expect(!!hollidayService).toBe(true);
  });

});
