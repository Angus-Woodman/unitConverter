const expect = require('chai').expect;
const rewire = require('rewire');
const convert = require("../lib/convert");

// const convert = rewire('../lib/convert.js');

describe('convert unit', () => {
  // let converter = convert.__get__("converter");

  it('should be a function', () => {
      expect(convert.converter).to.be.a('function');
  });

  it('should return an average of x frequencies', () => {
      expect(convert.converter()).to.equal('testing');
  })
});
