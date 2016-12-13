import angular from 'angular';

import './app.css';

let app = () => {
  return {
    template: require('./app.html')
  }
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', app)

export default MODULE_NAME;
