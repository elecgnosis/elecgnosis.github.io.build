import angular from 'angular';
import uiRouter from 'angular-ui-router';
import charactercounterComponent from './charactercounter.component';

let charactercounterModule = angular.module('charactercounter', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('charactercounter', {
      url: '/charactercounter',
      template: '<charactercounter></charactercounter>'
    });
})

.component('charactercounter', charactercounterComponent)

.name;

export default charactercounterModule;
