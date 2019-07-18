// run in console with: yarn start
// or with: clear; "running tsc:"; tsc; ""; "running node:"; ""; node .\dist\app.js; "";

export class Person {

    constructor(private name: string) { }

    public getName() {
        return this.name;
    }
}

console.debug('this is app file');
