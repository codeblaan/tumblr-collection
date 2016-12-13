import './index.css';

export default function($sce) {
  return {
    template: require('./index.html'),
    scope: {
      post: '='
    },
    link: (scope) => {
      scope.htmlSafe = $sce.trustAsHtml;
    }
  }
}
