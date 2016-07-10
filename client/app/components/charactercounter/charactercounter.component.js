import template from './charactercounter.html';
import controller from './charactercounter.controller';
import './charactercounter.styl';

let charactercounterComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default charactercounterComponent;
