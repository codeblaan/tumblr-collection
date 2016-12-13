export default function($http, $sce) {
  const API_KEY = 'ifJyOYcIVoAYQ9PyHF1nCYDkMOS1phoXZpei5ZIRnMUJJfXQhY';
  const BASE_URL = 'https://api.tumblr.com/v2/blog';

  return {
    getPosts: getPosts
  }

  function getPosts(blogName, offset=0) {
    return $http
      .jsonp(resourceUrl(blogName, offset))
      .then(response => response.data.response.posts, error => []);
  }

  function resourceUrl(blogName, offset) {
    var url = `${BASE_URL}/${blogName}.tumblr.com/posts?offset=${offset}&api_key=${API_KEY}`;
    return $sce.trustAsResourceUrl(url);
  }
}
