export default Service;

const API_KEY = 'ifJyOYcIVoAYQ9PyHF1nCYDkMOS1phoXZpei5ZIRnMUJJfXQhY';

const BASE_URL = 'https://api.tumblr.com/v2';

function Result(posts, totalPosts) {
  this.posts = posts;
  this.totalPosts = totalPosts;
}

function Service($http, $sce, $q) {
  this.getPosts = function(blogName, blogTag, offset=0) {
    if (!blogName && !blogTag) {
      return $q.when(new Result([], 0));
    }
    if (useTaggedApi(blogName, blogTag)) {
      return $http
        .jsonp(taggedApiUrl(blogTag))
        .then(response => new Result(response.data.response, response.data.response.length),
          error => new Result([], 0));
    } else {
      return $http
        .jsonp(blogApiUrl(blogName, blogTag, offset))
        .then(response => new Result(response.data.response.posts, response.data.response.total_posts),
          error => new Result([], 0));
    }
  }

  function useTaggedApi(blogName, blogTag) {
    return !blogName && blogTag;
  }

  function taggedApiUrl(blogTag) {
    var url = `${BASE_URL}/tagged?tag=${blogTag}&api_key=${API_KEY}`;
    return $sce.trustAsResourceUrl(url);
  }

  function blogApiUrl(blogName, blogTag, offset) {
    var url = `${BASE_URL}/blog/${blogName}.tumblr.com/posts?offset=${offset}&api_key=${API_KEY}`;
    if (blogTag) {
      url += `&tag=${blogTag}`;
    }
    return $sce.trustAsResourceUrl(url);
  }
}
