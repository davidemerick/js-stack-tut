/* eslint-disable no-console */
// @flow
// const str = 'ES6'
// const Dog = require('./dog')
import Dog from './dog'
// // backtick or backquotes required for use of template strings
// console.log(`Hello ${str}`)

const doge = new Dog('Doge')
console.log(doge.bark())
