import CharacterCounterModule from './charactercounter'
import CharacterCounterController from './charactercounter.controller';
import CharacterCounterComponent from './charactercounter.component';
import CharacterCounterTemplate from './charactercounter.html';

describe('CharacterCounter', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CharacterCounterModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CharacterCounterController();
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
      expect(CharacterCounterTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CharacterCounterComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CharacterCounterTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CharacterCounterController);
      });
  });
});
