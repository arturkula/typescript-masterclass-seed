// run in console with: clear; "running tsc:"; tsc; ""; "running node:"; ""; node .\dist\app.js; "";
// run in console with: yarn start

class MyClass {
    public myMethod() {
        const foo = 123;

        console.debug('1', this);

        setTimeout(() => console.debug('2', this));
    }
}

const myInstance = new MyClass();
myInstance.myMethod();
