describe('Controller: main', function() {
  var $controller, controller, $rootScope;

  beforeEach(module('sub-form'));
  beforeEach(inject(function (_$controller_,_$rootScope_) {

    $controller = _$controller_;
    $rootScope = _$rootScope_;

    controller = $controller('main', {
    });
  }));

  it('should get initialized', function() {
    expect(controller).not.toEqual(undefined);
  });

});
