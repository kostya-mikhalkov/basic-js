const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  stack: [],
  getLength() {
    return this.stack.length;
  },
  addLink(value) {
    this.stack.push(`( ${value !== undefined ? value : ''} )`);
    return this;
  },
  removeLink(position) {
    if(position < 1 || position > this.stack.length || !Number.isInteger(position)) {
      this.stack = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.stack.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.stack.reverse();
    return this;
  },
  finishChain() {
    const res = this.stack.join('~~');
    this.stack = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
