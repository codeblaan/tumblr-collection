import './index.css';

export default function() {
  return {
    restrict: 'E',
    template: require('./index.html'),
    scope: {
      favorites: '='
    },
    link: scope => {
      scope.removePostAtIndex = index => {
        scope.favorites.posts.splice(index, 1);
      };
    }
  }
}
