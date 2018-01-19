import Foo from '../foo';

describe('Foo', () => {
  describe('getBar', () => {
    it('returns "bar"', () => {
      expect(Foo.getBar()).toBe('bar');
    });
  });
});
