'use strict';

// ( 1 )
// "this" in the global scope

const globalScopeOutput = document.querySelector('#globalScopeOutput');

// Send output to the DOM
typeof this === 'undefined'
  ? (globalScopeOutput.textContent = `1. The value of "this" in the global scope is: ${typeof this}`)
  : (globalScopeOutput.textContent = `1. The value of "this" in the global scope is defined as: ${this}`);

// send output to the console
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

  // Send output to the DOM
  typeof this === 'undefined'
    ? (functionInGlobalScopeOutput.textContent = `2. The value of "this" in a function sitting in the global scope is: ${typeof this}`)
    : (functionInGlobalScopeOutput.textContent = `2. The value of "this" in a function sitting in the global scope is defined as: ${this}`);

  // send output to the console
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

  // Send output to the DOM
  typeof this === 'undefined'
    ? (arrowFunctionInGlobalScopeOutput.textContent = `3. The value of "this" in an arrow function sitting in the global scope is: ${typeof this}`)
    : (arrowFunctionInGlobalScopeOutput.textContent = `3. The value of "this" in an arrow function sitting in the global scope is defined as: ${this}`);

  // send output to the console
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

    // Send output to the DOM
    typeof this === 'undefined'
      ? (functionInFunctionOutput.textContent = `4. The value of "this" in a function within another function is: ${typeof this}`)
      : (functionInFunctionOutput.textContent = `4. The value of "this" in a function within another function is defined as: ${this}`);

    // send output to the console
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

    // Send output to the DOM
    typeof this === 'undefined'
      ? (arrowFunctionInFunctionOutput.textContent = `5. The value of "this" in an arrow function within another function is: ${typeof this}`)
      : (arrowFunctionInFunctionOutput.textContent = `5. The value of "this" in an arrow function within another function is defined as: ${this}`);

    // send output to the console
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
// "this" in a regular-function method of an object sitting in the global scope

const objectInGlobalScope1 = {
  objectId: 'objectInGlobalScope1',
  property1: 'property 1',
  method1: function () {
    const functionInObjectOutput = document.querySelector(
      '#functionInObjectOutput'
    );
    const thisToTheConsole1 = document.querySelector('#thisToTheConsole1');

    // Send output to the DOM
    typeof this === 'undefined'
      ? (functionInObjectOutput.textContent = `6. The value of "this" in a regular-function method from an object in the global scope is: ${typeof this}`)
      : (functionInObjectOutput.textContent = `6. The value of "this" in a regular-function method from an object in the global scope is defined as: ${this}`);
    thisToTheConsole1.textContent = this;

    // send output to the console
    console.log(
      typeof this === 'undefined'
        ? `6. The value of "this" in a regular-function method from an object in the global scope is: ${typeof this}`
        : `6. The value of "this" in a regular-function method from an object in the global scope is defined as: ${this}`
    );
    console.log(this);
  },
};

objectInGlobalScope1.method1();

// ( 7 )
// DONE "this" in an arrow-function method of an object sitting in the global scope

const objectInGlobalScope2 = {
  objectId: 'objectInGlobalScope2',
  property1: 'property 1',
  method1: () => {
    const arrowFunctionInObjectOutput = document.querySelector(
      '#arrowFunctionInObjectOutput'
    );
    const thisToTheConsole2 = document.querySelector('#thisToTheConsole2');

    // Send output to the DOM
    typeof this === 'undefined'
      ? (arrowFunctionInObjectOutput.textContent = `7. The value of "this" in an arrow-function method from an object in the global scope is: ${typeof this}`)
      : (arrowFunctionInObjectOutput.textContent = `7. The value of "this" in an arrow-function method from an object in the global scope is defined as: ${this}`);
    thisToTheConsole2.textContent = this;

    // send output to the console
    console.log(
      typeof this === 'undefined'
        ? `7. The value of "this" in an arrow-function method from an object in the global scope is: ${typeof this}`
        : `7. The value of "this" in an arrow-function method from an object in the global scope is defined as: ${this}`
    );
    console.log(this);
  },
};

objectInGlobalScope2.method1();

// ( 8 )
// "this" in a regular function in a method of an object sitting in the global scope

const objectInGlobalScope3 = {
  objectId: 'objectInGlobalScope3',
  property1: 'property 1',
  method1: function () {
    // Send output to the DOM
    const innerFunction1 = function () {
      const regularFunctionInMethodInObjectOutput = document.querySelector(
        '#regularFunctionInMethodInObjectOutput'
      );
      const thisToTheConsole3 = document.querySelector('#thisToTheConsole3');

      // Send output to the DOM
      typeof this === 'undefined'
        ? (regularFunctionInMethodInObjectOutput.textContent = `8. The value of "this" in a regular function in a method from an object in the global scope is: ${typeof this}`)
        : (regularFunctionInMethodInObjectOutput.textContent = `8. The value of "this" in a regular function in a method from an object in the global scope is defined as: ${this}`);

      thisToTheConsole3.textContent = typeof this;

      // send output to the console
      console.log(
        typeof this === 'undefined'
          ? `8. The value of "this" in a regular function in a method from an object in the global scope is: ${typeof this}`
          : `8. The value of "this" in a regular function in a method from an object in the global scope is defined as: ${this}`
      );
      console.log(this);
    };

    innerFunction1();
  },
};

objectInGlobalScope3.method1();

// ( 9 )
// "this" in an arrow-function in a method of an object sitting in the global scope

const objectInGlobalScope4 = {
  objectId: 'objectInGlobalScope4',
  property1: 'property 1',
  method1: function () {
    const innerArrowFunction1 = () => {
      const arrowFunctionInMethodInObjectOutput = document.querySelector(
        '#arrowFunctionInMethodInObjectOutput'
      );
      const thisToTheConsole4 = document.querySelector('#thisToTheConsole4');

      // Send output to the DOM
      typeof this === 'undefined'
        ? (arrowFunctionInMethodInObjectOutput.textContent = `9. The value of "this" in an arrow function in a method from an object in the global scope is: ${typeof this}`)
        : (arrowFunctionInMethodInObjectOutput.textContent = `9. The value of "this" in an arrow function in a method from an object in the global scope is defined as: ${this}`);

      thisToTheConsole4.textContent = this;

      // send output to the console
      console.log(
        typeof this === 'undefined'
          ? `9. The value of "this" in an arrow function in a method from an object in the global scope is: ${typeof this}`
          : `9. The value of "this" in an arrow function in a method from an object in the global scope is defined as: ${this}`
      );
      console.log(this); // this logs the actual object to the console
    };
    //
    innerArrowFunction1();
  },
};

objectInGlobalScope4.method1();
