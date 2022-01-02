# Vǫlva

Easier type checks for JS variables. To replace avant-garde spellcasting like `typeof yourVariable === 'object' && yourVariable !== null` with easier semantics.


### Motivation

Type checking with javascript can be inconsistent. `typeof yourVariable` tells only half of the story. It does not recognize arrays from objects, it doesn't differentiate integers from floats or nulls from objects. Then you have to remember behind which API the right check was hidden. Not to mention more exact types, like integers or floats.

Vǫlva hides these inconsistensies behind simple-to-remember API with comprehensive test suite.

### Install

`yarn add volva`


### Usage

Vǫlva gives "isX" syntax for common js types. isArray, isObject, isString, isBoolean etc.

```javascript
const {
  isArray,
  isBoolean,
  isFloat,
  isInteger,
  isNumber,
  isObject,
  isString
} = require('volva')


console.log(isArray( [1,2,3,4] ) ) // True.
console.log(isArray( {} ) ) // False.

console.log(isBoolean( false ) ) // True.
console.log(isBoolean( 'true' ) ) // False.

console.log(isFloat( 30.7 ) ) // True.
console.log(isFloat( 30 ) ) // False.

console.log(isInteger( 30 ) ) // True.
console.log(isInteger( 30.7 ) ) // False.

console.log(isNumber( 666 ) ) // True.
console.log(isNumber( 'Number' ) ) // False.

console.log(isObject( { title: 'Bone Silence', author: 'Alastair Reynolds' } ) ) // True.
console.log(isObject( [1,2,3,4] ) ) // False.

console.log(isString( 'I was forced to speak, no silence is my name' ) ) // True.
console.log(isString( 1917 ) ) // False.
```


On top of individual type checks, Vǫlva provides `getType()` for getting exact info. Whereas `typeof` may treat all numbers as just "number" or all objects, arrays and nulls as objects, `getType()` tells you exactly what you're dealing with.

Added types are `integer`, `float` and `array`


```javascript
const { getType } = require('volva')

const myInteger = 12345
console.log( getType(myInteger) ) // integer.

const myFloat = 353.4644
console.log( getType(myFloat) ) // float.

const myArray = [ 'Revenger', 'Shadow Captain', 'Bone Silence' ]
console.log( getType(myArray) ) // array.

const myObject = {}
console.log( getType(myObject) ) // object.

const myBool = true
console.log( getType(myBool) ) // boolean.

const myString = 'Far away on the other side, will you come to talk to this night'
console.log( getType(myString) ) // string.
```

#### What's in the name?

"Vǫlva" is an Old Norse word meaning "seeress". In this case, the seeress sees the truth behind variables.
