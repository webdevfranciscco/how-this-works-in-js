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

// ( 6 )
// "this" in a method of an object sitting in the global scope

const objectInGlobalScope1 = {
  property1: 'property 1',
  method1: function () {
    // << this method is a regular function
    const functionInObjectOutput = document.querySelector(
      '#functionInObjectOutput'
    );
    const thisToTheConsole1 = document.querySelector('#thisToTheConsole1');

    typeof this === 'undefined'
      ? (functionInObjectOutput.textContent = `6. The value of "this" in a method from an object in the global scope is: ${typeof this}`)
      : (functionInObjectOutput.textContent = `6. The value of "this" in a method from an object in the global scope is defined as: ${this}`);

    thisToTheConsole1.textContent = this;

    console.log(
      typeof this === 'undefined'
        ? `6. The value of "this" in a method from an object in the global scope is: ${typeof this}`
        : `6. The value of "this" in a method from an object in the global scope is defined as: ${this}`
    );
    console.log(this); // this logs the actual object to the console
  },
};

objectInGlobalScope1.method1();

// ( 7 )
// "this" in an arrow function method of an object sitting in the global scope

const objectInGlobalScope2 = {
  property1: 'property 1',
  method1: () => {
    // << this method is an arrow function
    const arrowFunctionInObjectOutput = document.querySelector(
      '#arrowFunctionInObjectOutput'
    );
    const thisToTheConsole1 = document.querySelector('#thisToTheConsole1');

    typeof this === 'undefined'
      ? (arrowFunctionInObjectOutput.textContent = `7. The value of "this" in an arrow function method from an object in the global scope is: ${typeof this}`)
      : (arrowFunctionInObjectOutput.textContent = `7. The value of "this" in an arrow function method from an object in the global scope is defined as: ${this}`);

    thisToTheConsole2.textContent = this;

    console.log(
      typeof this === 'undefined'
        ? `7. The value of "this" in an arrow function method from an object in the global scope is: ${typeof this}`
        : `7. The value of "this" in an arrow function method from an object in the global scope is defined as: ${this}`
    );
    console.log(this); // this logs the actual object to the console
  },
};

objectInGlobalScope2.method1();
