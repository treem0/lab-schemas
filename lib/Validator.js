const { getCaster } = require('./types');

class Validator {
  constructor(field, { type, required }) {
    this.field = field;
    this.type = type; 
    this.required = required;
    this.caster = getCaster(type);
  }
  validate(obj) {
    const value = obj[this.field];
    if(this.required && !value) throw new Error(`${this.field} is required`);
    if(!this.required && !value) return null;

    return this.caster(value);
  }
}

module.exports = {
  Validator
};
