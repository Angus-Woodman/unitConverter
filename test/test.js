const expect = require('chai').expect;
const rewire = require('rewire');

const convert = rewire('../lib/convert.js');

describe('convert unit', () => {
  let units = convert.__get__("UNITS");

  it('should be an object', () => {
    expect(units).to.be.a('object')
  })

  it('should be a function', () => {
      expect(convert.converter).to.be.a('function');
  });

  it('should return the converted unit', () => {
      expect(convert.converter(73, 'cm', 'm')).to.equal('0.73m');
  })
});
