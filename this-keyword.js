'use strict';

// ( 1 )
// "this" in the global scope

const globalScopeOutput = document.querySelector('#globalScopeOutput');

typeof this === 'undefined'
  ? (globalScopeOutput.textContent = `The value of "this" in the global scope is: ${typeof this}`)
  : (globalScopeOutput.textContent = `The value of "this" in the global scope is: ${this}`);
// 'undefined' could have been used instead of "typeof this", but somehow the latter felt better (as confirmation?)

console.log(
  typeof this === 'undefined'
    ? `1. The value of "this" in the global scope is: ${typeof this}`
    : `1. The value of "this" in the global scope is: ${this}`
);
