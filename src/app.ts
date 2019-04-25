// run in console with: clear; "running tsc:"; tsc; ""; "running node:"; ""; node .\dist\app.js; "";

// Object literal
const myObj = {
    myMethod() {
        console.debug('Object:::', this);
    },
};

// myObj.myMethod();

// Function
function myFunction(...text: string[]) {
    console.debug('Function:::', this, text);
}

const bindFunction = myFunction.bind(myObj);
bindFunction('abc', 'def');
bindFunction('a1c', 'def');
bindFunction('ab3', 'def');
myFunction.call(myObj, 'abc', 'def');
myFunction.apply(myObj, ['abc', 'def']);
