const index = require('./index')
test('should return provided string', () => {
    expect(index.func_test('adrian')).toBe('adrian')
})

afterAll(() => {
    index.server.close();
  });