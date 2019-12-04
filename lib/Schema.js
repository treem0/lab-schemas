const { getCaster } = require('./types');

class Schema {
  constructor(obj, type) {
    this.obj = obj;
    this.caster = getCaster(type);
  }
  validate(obj) {
    const value = obj;
    if(this.required === true && !value) {
      throw new Error('Error! Does Not Follow Schema!');
    }
    return this.caster(value);
  }
}

module.exports = {
  Schema
};
