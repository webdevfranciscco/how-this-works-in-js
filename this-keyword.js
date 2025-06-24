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
    ? (arrowFunctionInGlobalScopeOutput.textContent = `3. The value of "this" in an arrow function sitting in the global scope is: ${typeof this}`)
    : (arrowFunctionInGlobalScopeOutput.textContent = `3. The value of "this" in an arrow function sitting in the global scope is defined as: ${this}`);

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
      ? (functionInFunctionOutput.textContent = `4. The value of "this" in a function within another function is: ${typeof this}`)
      : (functionInFunctionOutput.textContent = `4. The value of "this" in a function within another function is defined as: ${this}`);
    console.log(
      typeof this === 'undefined'
        ? `4. The value of "this" in a function within another function is: ${typeof this}`
        : `4. The value of "this" in a function within another function is defined as: ${this}`
    );
  };
  functionInsideFunction();
};

functionInGlobalScope1();

// ( 5 )
// "this" in an arrow function within another function

const functionInGlobalScope2 = function () {
  const arrowFunctionInsideFunction = () => {
    const arrowFunctionInFunctionOutput = document.querySelector(
      '#arrowFunctionInFunctionOutput'
    );
    typeof this === 'undefined'
      ? (arrowFunctionInFunctionOutput.textContent = `5. The value of "this" in an arrow function within another function is: ${typeof this}`)
      : (arrowFunctionInFunctionOutput.textContent = `5. The value of "this" in an arrow function within another function is defined as: ${this}`);
    console.log(
      typeof this === 'undefined'
        ? `5. The value of "this" in an arrow function within another function is: ${typeof this}`
        : `5. The value of "this" in an arrow function within another function is defined as: ${this}`
    );
  };
  arrowFunctionInsideFunction();
};

functionInGlobalScope2();
