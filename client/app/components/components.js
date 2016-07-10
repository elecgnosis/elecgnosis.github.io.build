import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import charactercounter from './charactercounter/charactercounter';

let componentModule = angular.module('app.components', [
  Home,
  About,
  charactercounter
])

.name;

export default componentModule;
