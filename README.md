# 介绍
[![NPM version](https://img.shields.io/npm/v/path-parse-plus)](https://npmjs.org/package/path-parse-plus)
[![NPM downloads](https://img.shields.io/npm/dm/path-parse-plus)](https://npmjs.org/package/path-parse-plus)

拓展 node `path.parse` 方法返回结果，增加了 `query` `file` `path` 字段。

## 使用

```sh
yarn add path-parse-plus
```

```js
import pathParse from 'path-parse-plus';

pathParse('/path/index.jsx?a=1');

//=> {
//   root: '/',
//   dir: '/path',
//   base: 'index.jsx?a=1',
//   ext: '.jsx',
//   name: 'index',
//   query: '?a=1',
//   file: 'index.jsx',
//   path: '/path/index.jsx',
// }
```

## 许可证

MIT

## 捐赠

如果觉得 `path-parse-plus` 对您有帮助，或者想请作者喝一杯咖啡的话，欢迎给我 [捐赠](https://github.com/yinjiazeng/donate)。