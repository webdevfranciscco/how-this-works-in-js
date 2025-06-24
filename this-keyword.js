'use strict';

// ( 1 )
// "this" in the global scope

const globalScopeOutput = document.querySelector('#globalScopeOutput');

typeof this === 'undefined'
  ? (globalScopeOutput.textContent = `1. The value of "this" in the global scope is: ${typeof this}`)
  : (globalScopeOutput.textContent = `1. The value of "this" in the global scope is defined as: ${this}`);
// 'undefined' could have been used instead of "typeof this", but somehow the latter felt better (as confirmation?)

console.log(
  typeof this === 'undefined'
    ? `1. The value of "this" in the global scope is: ${typeof this}`
    : `1. The value of "this" in the global scope is defined as: ${this}`
);

// ( 2 )
// "this" in a function sitting in the global scope

const functionInGlobalScope = function () {
  const functionInGlobalScopeOutput = document.querySelector(
    '#functionInGlobalScopeOutput'
  );
  typeof this === 'undefined'
    ? (functionInGlobalScopeOutput.textContent = `2. The value of "this" in a function sitting in the global scope is: ${typeof this}`)
    : (functionInGlobalScopeOutput.textContent = `2. The value of "this" in a function sitting in the global scope is defined as: ${this}`);
  console.log(
    typeof this === 'undefined'
      ? `2. The value of "this" in a function sitting in the global scope is: ${typeof this}`
      : `2. The value of "this" in a function sitting in the global scope is defined as: ${this}`
  );
};

functionInGlobalScope();
