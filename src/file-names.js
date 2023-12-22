const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
let usedNames = {};
let newNames = [];

for(let i = 0; i < names.length; i++) {
  let name = names[i];
  let preff = '';
  if(newNames.includes(names[i])) {
    usedNames[name] = usedNames[name] ? usedNames[name] + 1 : 1;
    preff = `(${usedNames[name]})`;
  }
    newNames.push(name + preff);
}
return newNames;
}
console.log(renameFiles(["file", "file", "image", "file(1)", "file"]));
module.exports = {
  renameFiles
};
