export default function(tumblr) {
  return {
    template: require('./index.html'),
    link: (scope) => {
      scope.results = {};
      scope.search = () => {
        tumblr.getPosts(scope.blog.name).then(posts => {
          scope.results.posts = posts;
        }, error => {
          scope.results.posts = [];
        });
      };
    }
  }
}
