export default function($http, $sce) {
  const API_KEY = 'ifJyOYcIVoAYQ9PyHF1nCYDkMOS1phoXZpei5ZIRnMUJJfXQhY';
  const BASE_URL = 'https://api.tumblr.com/v2';

  return {
    getPosts: getPosts
  }

  function getPosts(blogName, blogTag, offset=0) {
    if (useTaggedApi(blogName, blogTag)) {
      return $http
        .jsonp(taggedApiUrl(blogTag, offset))
        .then(response => response.data.response, error => []);
    } else {
      return $http
        .jsonp(blogApiUrl(blogName, blogTag, offset))
        .then(response => response.data.response.posts, error => []);
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
