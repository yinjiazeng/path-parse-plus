const pathParse = require('.');

test('path有参数', () => {
  expect(pathParse('/path/index.jsx?a=1')).toEqual({
    root: '/',
    dir: '/path',
    base: 'index.jsx?a=1',
    ext: '.jsx',
    name: 'index',
    query: '?a=1',
    file: 'index.jsx',
    path: '/path/index.jsx',
  });
});

test('path无参数', () => {
  expect(pathParse('/path/index.jsx')).toEqual({
    root: '/',
    dir: '/path',
    base: 'index.jsx',
    ext: '.jsx',
    name: 'index',
    query: '',
    file: 'index.jsx',
    path: '/path/index.jsx',
  });
});

test('path文件无拓展名有参数', () => {
  expect(pathParse('/path/index?a=1')).toEqual({
    root: '/',
    dir: '/path',
    base: 'index?a=1',
    ext: '',
    name: 'index',
    query: '?a=1',
    file: 'index',
    path: '/path/index',
  });
});

test('path文件无拓展名无参数', () => {
  expect(pathParse('/path/index')).toEqual({
    root: '/',
    dir: '/path',
    base: 'index',
    ext: '',
    name: 'index',
    query: '',
    file: 'index',
    path: '/path/index',
  });
});