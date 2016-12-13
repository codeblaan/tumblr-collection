import angular from 'angular';

import './app.css';

import hsSearchDirective from './hs-search-directive';
import hsPostDirective from './hs-post-directive';
import tumblrService from './tumblr-service';

let appDirective = () => {
  return {
    template: require('./app.html')
  }
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', appDirective)
  .service('tumblr', tumblrService)
  .directive('hsSearch', hsSearchDirective)
  .directive('hsPost', hsPostDirective);

export default MODULE_NAME;
