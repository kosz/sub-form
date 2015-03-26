describe('Directive: sub-form', function() {
  var $compile, $rootScope;

  beforeEach(module('sub-form'));
  beforeEach(inject(function (_$compile_,_$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('renders a form containing a md-material md-fab button', function() {
    var element = $compile('<sub-form></sub-form>')($rootScope);
    $rootScope.$digest();

    expect(element.html()).not.toEqual(undefined);
    expect(element.html()).toContain('md-fab');
  });

});
