import './index.css';

export default function($sce) {
  return {
    restrict: 'E',
    template: require('./index.html'),
    scope: {
      post: '='
    },
    link: scope => {
      scope.htmlSafe = $sce.trustAsHtml;
    }
  }
}
