const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: '',
  // countItems: this.chain.split('~~'),
  

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      value = ' ';
    };
    this.chain = this.chain + `( ${value} )~~`;
    return this;
  },
  removeLink(position) {
    if (position > this.chain.slice(0, -2).split('~~').length || position < 1 || position ===undefined) {
      throw new Error;
    }
    this.chain = this.chain.split('~~');
    for (let i = 0; i < this.chain.length; i++) {
      if (i === position - 1) {
        if (i + 1 === this.chain.length) {
          this.chain.shift(this.chain[0]);
        } else {
      this.chain.shift(this.chain[0]);
      this.chain.push(this.chain[0]);
      this.chain.shift(this.chain[0]);
      }
      } else {
      this.chain.push(this.chain[0]);
      this.chain.shift(this.chain[0]);
    }
    }
    
    this.chain = this.chain.join('~~');
    return this;
  },
  reverseChain() {
    if (this.chain == '') {} else {
    this.chain = this.chain.slice(0, -2).split('~~');
    let length = this.chain.length;
    for (let i = length - 1; i >= 0; i--) {
      this.chain.push(this.chain[i]);
    }
    for (let i = length - 1; i >= 0; i--) {
      this.chain.shift(this.chain[0]);
    }
    if (this.chain.length == 1) {
    this.chain = String(this.chain) + '~~';  
    } else {
    this.chain = this.chain.join('~~') + '~~';
    };
    }
    return this;
  },
  finishChain() {
    if (this.chain[this.chain.length - 1] == '~') {
    return this.chain.slice(0, -2);
    } else {
      return this.chain;
    }
  }
};

module.exports = chainMaker;
