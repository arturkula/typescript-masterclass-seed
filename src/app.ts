// run in console with: clear; "running tsc:"; tsc; ""; "running node:"; ""; node .\dist\app.js; "";

function myFunction() {
    console.debug('Function:::', this);
}

myFunction();

// object literal
const myObj = {
    myMethod() {
        console.debug('Object:::', this);
    },
};

myObj.myMethod();

// Classes
class MyClass {
    public myMethod() {
        console.debug('Class:::', this);
    }
}

const myInstance = new MyClass();
myInstance.myMethod();
