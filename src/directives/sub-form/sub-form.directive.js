angular.module('sub-form')
  .directive('subForm', function () {

    return {
      replace: true,
      restrict: 'E',
      scope: true,
      controller: 'ach.SubFormCtrl',
      controllerAs: 'subForm',
      templateUrl: 'directives/sub-form/sub-form.html',
      link: function (scope) {

      }
    };
  });
