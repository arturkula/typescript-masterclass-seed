// run in console with: yarn start

const person = {
    name: 'arku',
    age: 123,
};

type Person = typeof person;

const anotherPerson: Person = {
    name: 'ss',
    age: 33,
};

console.debug(person);
console.debug(anotherPerson);
