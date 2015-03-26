describe('Controller: ach.SubFormCtrl', function() {
  var $controller, controller, $rootScope, $scope;

  beforeEach(module('sub-form'));
  beforeEach(inject(function (_$controller_,_$rootScope_) {

    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();

    controller = $controller('ach.SubFormCtrl', {
      '$scope': $scope
    });
  }));

  it('should get initialized', function() {
    expect(controller).not.toEqual(undefined);
  });

});
