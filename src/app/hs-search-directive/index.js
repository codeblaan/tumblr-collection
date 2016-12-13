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
        if (!blog.name && !blog.tag) {
          scope.results.posts = [];
          return;
        }
        tumblr.getPosts(blog.name, blog.tag).then(posts => {
          scope.results.posts = posts;
        }, error => {
          scope.results.posts = [];
        });
      };

      scope.addPost = (post) => {
        scope.favorites.posts.unshift(post);
      };
    }
  }
}
