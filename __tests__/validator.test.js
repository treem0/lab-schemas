const {
  Validator
} = require('../lib/Validator');

const nameValidator = new Validator('name', {
  type: String,
  required: true
});
  
const ageValidator = new Validator('age', {
  type: String,
  required: true
});
  
const colorValidator = new Validator('color', {
  type: String,
  required: true
});

const dog = {
  name: 'spot',
  age: '5',
  weight: '20 lbs'
};

describe('validator module', () => {
  beforeAll(() => 
  describe('basic validation', () => {
    it('properly tells if a value is a validated', () => {
      expect(nameValidator.validate(dog)).toEqual('spot');
      expect(ageValidator.validate(dog)).toEqual('5');
      
      
    });
    it('throws correct error', () => {
      expect(nameValidator.validate(dog)).to;
    });
  });
})
;
