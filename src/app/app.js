import angular from 'angular';

import './app.css';
import '../../node_modules/milligram/dist/milligram.css';

import hsSearchDirective from './hs-search-directive';
import hsPostDirective from './hs-post-directive';
import hsFavoritesDirective from './hs-favorites-directive';
import tumblrService from './tumblr-service';

let appDirective = () => {
  return {
    template: require('./app.html'),
    scope: {},
    link: scope => {
      scope.results = {};
      scope.favorites = {
        posts: []
      };
    }
  }
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', appDirective)
  .service('tumblr', tumblrService)
  .directive('hsSearch', hsSearchDirective)
  .directive('hsPost', hsPostDirective)
  .directive('hsFavorites', hsFavoritesDirective);

export default MODULE_NAME;
