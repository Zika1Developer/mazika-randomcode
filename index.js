class RandomCode {
    constructor() {
      this.possibleNumbers = "0123456789";
      this.possibleLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      this.possibleSymbols = "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?`~";
      this.includeNumbers = true;
      this.includeWords = true;
      this.includeSymbols = false;
      this.minLength = 8;
      this.maxLength = 12;
    }
  
    addOptions(options) {
      if (typeof options.Numbers !== 'undefined') {
        this.includeNumbers = options.Numbers;
      }
      if (typeof options.Words !== 'undefined') {
        this.includeWords = options.Words;
      }
      if (typeof options.Symbols !== 'undefined') {
        this.includeSymbols = options.Symbols;
      }
      if (typeof options.MinLength !== 'undefined') {
        this.minLength = options.MinLength;
      }
      if (typeof options.MaxLength !== 'undefined') {
        this.maxLength = options.MaxLength;
      }
      return this;
    }
  
    generate(length) {
      let possible = '';
      if (this.includeNumbers) possible += this.possibleNumbers;
      if (this.includeWords) possible += this.possibleLetters;
      if (this.includeSymbols) possible += this.possibleSymbols;
  
      if (possible === '') return ''; // Return an empty string if no characters are allowed
  
      let text = '';
      for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    }
  
    create() {
      const length = Math.floor(Math.random() * (this.maxLength - this.minLength + 1)) + this.minLength;
      return this.generate(length);
    }
  }
  
  
  module.exports = RandomCode;
  