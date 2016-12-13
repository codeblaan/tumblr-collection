import app from './app';

describe('app', () => {

  describe('AppDirective', () => {
    let element;

    beforeEach(() => {
      angular.mock.module(app);

      angular.mock.inject(($compile, $rootScope) => {
        let scope = $rootScope.$new();
        element = $compile('<app></app>')(scope);
      });
    });

    it('should contain Search', () => {
      expect(element.text()).toContain('Search');
    });
  });
});
