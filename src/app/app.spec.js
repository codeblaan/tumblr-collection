import app from './app';

describe('app', () => {
  beforeEach(() => {
    angular.mock.module(app);
  });

  describe('AppDirective', () => {
    let element;

    beforeEach(() => {
      angular.mock.inject(($compile, $rootScope) => {
        let scope = $rootScope.$new();
        element = $compile('<app></app>')(scope);
      });
    });

    it('should display Tumblr Collection', () => {
      expect(element.text()).toContain('Tumblr Collection');
    });

    it('should render search section', () => {
      expect(element.find('hs-search').length).toBe(1);
    });

    it('should render favorites section', () => {
      expect(element.find('hs-favorites').length).toBe(1);
    });
  });

  describe('hsPostDirective', () => {
    let element;

    beforeEach(() => {
      angular.mock.inject(($compile, $rootScope) => {
        let scope = $rootScope.$new();
        scope.post = {
          type: 'text',
          title: 'my title',
          body: 'my body'
        };
        element = $compile('<hs-post post="post"></hs-post>')(scope);
        scope.$digest();
      });
    });

    it('renders', () => {
      expect(element.text()).toContain('my body');
      expect(element.text()).toContain('my title');
    });
  });

  describe('hsSearchDirective', () => {
    let element;

    beforeEach(() => {
      angular.mock.inject(($compile, $rootScope) => {
        let scope = $rootScope.$new();
        scope.results = {
          posts: [{type: 'text', title: 'my title', body: 'my body'}]
        };
        element = $compile('<hs-search results="results" favorites="favorites"></hs-search>')(scope);
        scope.$digest();
      });
    });

    it('renders', () => {
      expect(element.find('form').length).toBe(1);
      expect(element.find('hs-post').length).toBe(1);
    });
  });

  describe('hsFavoritesDirective', () => {
    let element;

    beforeEach(() => {
      angular.mock.inject(($compile, $rootScope) => {
        let scope = $rootScope.$new();
        scope.favorites = {
          posts: [{type: 'text', title: 'my title', body: 'my body'}]
        };
        element = $compile('<hs-favorites favorites="favorites"></hs-favorites>')(scope);
        scope.$digest();
      });
    });

    it('renders', () => {
      expect(element.find('hs-post').length).toBe(1);
    });
  });

  describe('tumblrService', () => {
    let tumblr, $httpBackend;

    beforeEach(() => {
      angular.mock.inject((_tumblr_, _$httpBackend_) => {
        tumblr = _tumblr_;
        $httpBackend = _$httpBackend_;
      });
    });

    describe('#getPosts', () => {
      it('makes request to tumblr api', () => {
        let result;
        tumblr.getPosts('peacecorps', null)
          .then(_result => {
            result = _result;
          });
      });
    });
  });
});
