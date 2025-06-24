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

// ( 3 )
// "this" in an arrow function sitting in the global scope

const arrowFunctionInGlobalScope = () => {
  const arrowFunctionInGlobalScopeOutput = document.querySelector(
    '#arrowFunctionInGlobalScopeOutput'
  );
  typeof this === 'undefined'
    ? (arrowFunctionInGlobalScopeOutput.textContent = typeof this)
    : (arrowFunctionInGlobalScopeOutput.textContent = this);

  console.log(
    typeof this === 'undefined'
      ? `3. The value of "this" in an arrow function sitting in the global scope is: ${typeof this}`
      : `3. The value of "this" in an arrow function sitting in the global scope is defined as: ${this}`
  );
};
arrowFunctionInGlobalScope();

// ( 4 )
// "this" in a function within another function

const functionInGlobalScope1 = function () {
  const functionInsideFunction = function () {
    const functionInFunctionOutput = document.querySelector(
      '#functionInFunctionOutput'
    );
    typeof this === 'undefined'
      ? (functionInFunctionOutput.textContent = typeof this)
      : (functionInFunctionOutput.textContent = this);
    console.log(
      typeof this === 'undefined'
        ? `4. The value of "this" in a function within another function is: ${typeof this}`
        : `4. The value of "this" in a function within another function is: ${this}`
    );
  };
  functionInsideFunction();
};

functionInGlobalScope1();
