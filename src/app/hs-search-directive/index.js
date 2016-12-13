import './index.css';

export default function(tumblr) {
  return {
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
          .then(posts => {
            scope.results.posts = posts;
          }, () => {
            scope.results.posts = [];
          });
      };

      scope.addPost = (post) => {
        scope.favorites.posts.unshift(post);
      };
    }
  }
}
