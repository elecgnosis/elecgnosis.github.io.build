import HeadquartersModule from './headquarters'
import HeadquartersController from './headquarters.controller';
import HeadquartersComponent from './headquarters.component';
import HeadquartersTemplate from './headquarters.html';

describe('Headquarters', () => {
  let $rootScope, makeController;

  beforeEach(window.module(HeadquartersModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HeadquartersController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(HeadquartersTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = HeadquartersComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(HeadquartersTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(HeadquartersController);
      });
  });
});
