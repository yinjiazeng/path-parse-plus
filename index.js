const { parse } = require('path');

const pathParse = function(p) {
  const parsedResult = parse(p);
  let { dir, ext, name } = parsedResult;
  let query = '';
  const str = (ext || name);
  const queryIndex = str.indexOf('?');

  if (queryIndex !== -1) {
    if (ext) {
      ext = ext.substr(0, queryIndex);
    } else {
      name = name.substr(0, queryIndex);
    }

    query = str.substr(queryIndex);
  }

  const file = name + ext;
  const path = dir + '/' + file;

  return Object.assign(parsedResult, {
    ext,
    name,
    query,
    path,
    file,
  });
}

module.exports = pathParse;