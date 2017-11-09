'use strict';


/**
 *
 */
function set(obj, path, value) {
  if (!obj) obj = {};
  const split = path.split('.');
  const len = split.length;
  const last = len - 1;
  let current = obj;

  for (let i = 0; i < len; i++) {
    const prop = split[i];
    if (current[prop] === undefined) {
      current[prop] = i === last ? value : {};
    }
    current = current[prop];
  }
  
  return obj;
};


/**
 *
 */
module.exports = set;
