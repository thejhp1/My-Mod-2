const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  let appacademy;
  let lunch;
  beforeEach(()=>{
    appacademy = new Word ('appacademy')
    lunch = new Word('lunch')
  })
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(appacademy).to.be.property('word');
      expect(lunch).to.be.property('word');
    });

    it('should set the "word" property when a new word is created', function () {
      expect(appacademy.word).to.eql("appacademy");
      expect(lunch.word).to.eql('lunch');
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      expect(appacademy.removeVowels()).to.equal('ppcdmy');
      expect(lunch.removeVowels()).to.equal('lnch');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect(appacademy.removeConsonants()).to.equal('aaae');
      expect(lunch.removeConsonants()).to.equal('u');
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      expect(appacademy.pigLatin()).to.equal('appacademyyay')
      expect(lunch.pigLatin()).to.equal('unchlay')
    });
  });
});
