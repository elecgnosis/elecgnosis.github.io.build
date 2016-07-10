import angular from 'angular';
import uiRouter from 'angular-ui-router';
import headquartersComponent from './headquarters.component';

let headquartersModule = angular.module('headquarters', [
  uiRouter
])

.component('headquarters', headquartersComponent)

.name;

export default headquartersModule;
