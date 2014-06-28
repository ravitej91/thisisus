'use strict';

angular.module('thisisusApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
