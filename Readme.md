# mazika-randomcode

- **Usage:**

```js
const CodeName = new RandomCode();
const CodeResult = CodeName.addOptions({
  MinLength: 8, //Optional
  MaxLength: 12, //Optional
  Numbers: true, //Optional
  Words: false, //Optional
  Symbols: true, //Optional
}).create();

conosle.log(CodeResult);
```