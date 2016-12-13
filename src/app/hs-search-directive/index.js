import './index.css';

export default function(tumblr) {
  return {
    restrict: 'E',
    template: require('./index.html'),
    scope: {
      results: '=',
      favorites: '='
    },
    link: (scope) => {
      scope.blog = {};

      scope.search = (blog) => {
        tumblr
          .getPosts(blog.name, blog.tag)
          .then(response => {
            scope.results.name = blog.name;
            scope.results.tag = blog.tag;
            scope.results.totalPosts = response.totalPosts;
            scope.results.posts = response.posts;
          }, () => {
            scope.results.posts = [];
          });
      };

      scope.addPost = (post) => {
        scope.favorites.posts.unshift(post);
      };

      scope.showMore = (results) => {
        tumblr
          .getPosts(results.name, results.tag, results.posts.length)
          .then(response => {
            scope.results.totalPosts = response.totalPosts;
            response.posts.forEach(post => {
              scope.results.posts.push(post);
            });
          });
      };
    }
  }
}
