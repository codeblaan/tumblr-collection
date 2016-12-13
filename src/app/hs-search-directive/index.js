export default function(tumblr) {
  return {
    template: require('./index.html'),
    link: (scope) => {
      scope.blog = {};
      scope.results = {};
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
    }
  }
}
